import React, { Component } from 'react'
import { View, Text, Button, ScrollView, Image, TouchableOpacity, Platform } from 'react-native'
import { Constants, Location, Permissions } from 'expo'

import { connect } from 'react-redux'
import { fetchListings, fetchLocationListings } from '../../../redux/reducers/actions'

import styles from './styles'

class Local extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      errorMessage: null,
    }
    this.renderImage = this.renderImage.bind(this)
  }

  componentDidMount = () => {
    this._getLocationAsync()
  }

  _getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      })
    }

    const location = await Location.getCurrentPositionAsync({})

    if (location.coords.latitude < 43.705 && location.coords.latitude > 43.703 &&
      location.coords.longitude > -72.3 && location.coords.longitude < -72.280) {
      this.setState({ location: 'Cube' })
      console.log(this.state.location)
    } else if (location.coords.latitude < 43.7061 && location.coords.latitude > 43.704 &&
      location.coords.longitude > -72.289 && location.coords.longitude < -72.287) {
      this.setState({ location: 'Baker' })
      console.log(this.state.location)
    } else if (location.coords.latitude < 43.702 && location.coords.latitude > 43.700 &&
      location.coords.longitude > -72.289 && location.coords.longitude < -72.289) {
      this.setState({ location: 'HOP' })
      console.log(this.state.location)
    } else if (location.coords.latitude < 43.7036 && location.coords.latitude > 43.702 &&
      location.coords.longitude > -72.290 && location.coords.longitude < -72.288) {
      this.setState({ location: 'Collis' })
      console.log(this.state.location)
    } else {
      this.setState({ location })
      console.log(this.state.location)
    }
    this.setState({ location: 'Baker' })
    this.props.fetchLocationListings(this.state.location)

    const willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      (payload) => {
        this.props.fetchLocationListings()
      },
    )
  };

  refreshScreen = () => {
    this.props.fetchListings()
  }

  renderImage(listing) {
    if (listing.author === null || listing.author.profilePic === null) {
      return (
        <Image source={require('../../../../assets/default.png')} style={styles.image} />
      )
    }
    const base64 = listing.author.profilePic
    return (<Image source={{ uri: base64 }} style={styles.image} />)
  }

  render() {
    if (this.state.location == null) {
      return (
        <View>
          <Text> Welcome </Text>
        </View>
      )
    }

    let location = this.state.location
    if (this.state.location === 'Baker') {
      location = 'Baker Tower'
    }
    // console.log(`listings: ${this.props.listings}`)
    return (
      <ScrollView style={styles.flatlist}>
        <View style={styles.entry}>
          <View style={styles.welcome}>
            <Text style={styles.locationText}> Welcome to {location} </Text>
          </View>
          <View style={styles.container}>
            {this.props.listings.map(listing => (
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('ListingDetail', { listing }) }} style={styles.entries} key={listing._id}>
                {this.renderImage(listing)}
                <Text> ${listing.amount} - {listing.location} </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => (
  {
    listings: state.listings.all,
  }
)

const mapDispatchToProps = {
  fetchLocationListings,
}

export default connect(mapStateToProps, mapDispatchToProps)(Local)
