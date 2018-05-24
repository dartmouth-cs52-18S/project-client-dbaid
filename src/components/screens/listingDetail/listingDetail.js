import React from 'react'
import { View, Image, Text, Button, ScrollView } from 'react-native'

import styles from './styles'

const ListingDetail = (props) => {
  const name = props.navigation.state.params.name
  const bio = props.navigation.state.params.bio
  const year = props.navigation.state.params.year
  const listing = props.navigation.state.params.listing
  console.log(listing)
  return (
    <View>
      <View>
        <Image
          style={styles.image}
          source={require('../../../../assets/profileOne.png')}
        />
        <View>
          <Text > { name }</Text>
          <Text> Offering: ${listing.amount} </Text>
          <Text> Location: {listing.location} </Text>
          <Text > Additional Information: {listing.description}</Text>
        </View>
      </View>
      <View>
        <Button onPress={() => { props.navigation.navigate('ChatDetail', { /* userID: listing.ownerID */}) }} title="Start Chat" />
        <Button onPress={() => { props.navigation.navigate('UserProf', { name, bio, year }) }} title="View Profile" />
      </View>
    </View>
  )
}

export default ListingDetail
