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
  }

  componentDidMount = () => {
    this.props.fetchListings()
  }

  refreshScreen = () => {
    this.props.fetchListings()
  }

  render() {
    if (this.props.listings == null) {
      return (
        <View />
      )
    }
    console.log('BANANA')
    // console.log(`listings: ${this.props.listings}`)
    return (
      <ScrollView style={styles.flatlist}>
        <Button onPress={() => { this.props.navigation.navigate('Create', { refresh: this.refreshScreen }) }} title="Create DBA Listing" />
        <View style={styles.entry}>
          {this.props.listings.map(listing => (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ListingDetail', { listing, bio: 'I do computer science', year: 'Class of 2020' }) }} style={styles.entries} key={listing._id}>
              {listing.author.profilePic ? (<Image
                source={require('../../../../assets/profileOne.png')}
              />) : null}
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
