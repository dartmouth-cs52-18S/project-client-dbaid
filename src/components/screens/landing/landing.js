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
  // console.log('landing props')
    // console.log(this.props)
    if (this.props.listings == null) {
      return (
        <View />
      )
    }
    // console.log(`listings: ${this.props.listings}`)
    // TODO: LINK LISTING DETAIL PAGE HERE INSTEAD
    return (
      <ScrollView style={styles.flatlist}>
        <Button onPress={() => { this.props.navigation.navigate('Create', { refresh: this.refreshScreen }) }} title="Create DBA Listing" />
        <View style={styles.entry}>
          {this.props.listings.map(listing => (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ListingDetail', { listing }) }} style={styles.entries} key={listing._id}>
              <Image
                source={require('../../../../assets/profileOne.png')}
              />
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
