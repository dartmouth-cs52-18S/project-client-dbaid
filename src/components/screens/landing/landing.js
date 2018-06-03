import React, { Component } from 'react'
import { View, Text, Button, ScrollView, Image, TouchableOpacity, Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Constants, Location, Permissions } from 'expo'

import { connect } from 'react-redux'
import { fetchListings } from '../../../redux/reducers/actions'

import styles from './styles'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      errorMessage: null,
    }
    this.renderImage = this.renderImage.bind(this)
    this.getTimeString = this.getTimeString.bind(this)
  }

  componentDidMount = () => {
    this.props.fetchListings()
    const willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      (payload) => {
        this.props.fetchListings()
      },
    )
  }

  getTimeString(listing) {
    const date = new Date(listing.startTime)
    if (listing.startTime === null || date.toLocaleTimeString() === undefined) return ('None')
    const time = date.toLocaleTimeString()
    // console.log(time)
    return time
  }

  _getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      })
    }

    const location = await Location.getCurrentPositionAsync({})
    this.setState({ location })
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
    if (this.props.listings == null) {
      return (
        <View />
      )
    }
    console.log('listings on landing')
    console.log(this.props.listings)
    return (
      <ScrollView style={styles.flatlist}>
        <View style={styles.bar}>
          <Button style={styles.barItem} onPress={() => { this.props.navigation.navigate('Create', { refresh: this.refreshScreen }) }} title="Create DBA Listing" />
          <TouchableOpacity style={styles.barItem} onPress={this.refreshScreen}>
            <Ionicons name={'ios-refresh'} size={35} color={'#000000'} />
          </TouchableOpacity>
        </View>
        <View style={styles.entry}>
          {this.props.listings.map(listing => (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ListingDetail', { listing }) }} style={styles.entries} key={listing._id}>
              {this.renderImage(listing)}
              <Text> ${listing.amount} - {listing.location} </Text>
              <Text>{this.getTimeString(listing)}</Text>
            </TouchableOpacity>
          ))}
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
  fetchListings,
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
