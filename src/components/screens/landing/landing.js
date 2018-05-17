import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { fetchListings } from '../../../redux/reducers/actions'

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
    console.log(`listings: ${this.props.listings}`)
    return (
      <View style={styles.root}>
        <View style={styles.entry}>
          <Button onPress={() => { this.props.navigation.navigate('Create', { refresh: this.refreshScreen }) }} title="Create DBA Listing" />
          {this.props.listings.map(listing => (
            <View key={listing._id}>
              <Text> {listing.description} </Text>
            </View>
          ))}
        </View>
      </View>
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
