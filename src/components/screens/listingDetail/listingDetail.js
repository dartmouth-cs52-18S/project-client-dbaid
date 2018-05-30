import React from 'react'
import { View, Image, Text, Button, ScrollView } from 'react-native'

import styles from './styles'

function renderImage(listing) {
  if (listing.author === null || listing.author.profilePic === null) {
    console.log('Pineapple')
    return (
      <Image source={require('../../../../assets/default.png')} style={styles.image} />
    )
  }
  const base64 = listing.author.profilePic
  console.log('BANANA')
  console.log(base64)
  return (<Image source={{ uri: base64 }} style={styles.image} />)
}

const ListingDetail = (props) => {
  const author = props.navigation.state.params.author
  const bio = props.navigation.state.params.bio
  const year = props.navigation.state.params.year
  const listing = props.navigation.state.params.listing
  const params = props.navigation.state.params
  return (
    <View style={styles.root}>
      <View style={styles.profile}>
        {renderImage(listing)}
        <View style={styles.profile}>
          <Text style={styles.text}> Author: {listing.author.username}</Text>
          <Text style={styles.text}> DBA Amount: {listing.amount} </Text>
          <Text style={styles.text}> Location: {listing.location} </Text>
          <Text style={styles.info}> Additional Information: {listing.description}</Text>
        </View>
      </View>
      <View>
        <Button onPress={() => { props.navigation.navigate('ChatDetail', { params }) }} title="Start Chat" />
        <Button onPress={() => { props.navigation.navigate('UserProf', { params }) }} title="View Profile" />
      </View>
    </View>
  )
}

export default ListingDetail
