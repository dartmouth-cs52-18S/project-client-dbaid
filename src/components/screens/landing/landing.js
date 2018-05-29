import React, { Component } from 'react'
import { View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { fetchListings } from '../../../redux/reducers/actions'
import { signoutUser } from '../../../actions/index'

import styles from './styles'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
    }
    this.renderImage = this.renderImage.bind(this)
  }

  componentDidMount = () => {
    this.props.fetchListings()
  }

  refreshScreen = () => {
    this.props.fetchListings()
  }

  renderImage(listing) {
    if (listing.author === null || listing.author.profilePic === null) {
      console.log('APPLE')
      return (
        <Image source={require('../../../../assets/default.png')} style={styles.image} />
      )
    }
    const base64 = listing.author.profilePic
    console.log('BANANA')
    console.log(base64)
    return (<Image source={{ uri: base64 }} style={styles.image} />)
  }

  render() {
    if (this.props.listings == null) {
      return (
        <View />
      )
    }
    // console.log(`listings: ${this.props.listings}`)
    return (
      <ScrollView style={styles.flatlist}>
        <Button onPress={() => { this.props.navigation.navigate('Create', { refresh: this.refreshScreen }) }} title="Create DBA Listing" />
        <View style={styles.entry}>
          {this.props.listings.map(listing => (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ListingDetail', { listing }) }} style={styles.entries} key={listing._id}>
              {this.renderImage(listing)}
              <Text> ${listing.amount} - {listing.location} </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Button onPress={() => this.props.signoutUser(this.props)} title="Sign Out" />
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
  signoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
