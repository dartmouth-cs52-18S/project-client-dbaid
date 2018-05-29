import React from 'react'
import { View, Image, Text, Button, ScrollView } from 'react-native'

import styles from './styles'

const ListingDetail = (props) => {
  const author = props.navigation.state.params.author
  const bio = props.navigation.state.params.bio
  const year = props.navigation.state.params.year
  const listing = props.navigation.state.params.listing
  const params = props.navigation.state.params
  console.log('listing props')
  console.log(props)
  // console.log(props.navigation.state.params)
  return (
    <View>
      <View>
        <Image
          style={styles.image}
          source={require('../../../../assets/profileOne.png')}
        />
        <View>
          <Text> Author: {author}</Text>
          <Text> Offering: ${listing.amount} </Text>
          <Text> Location: {listing.location} </Text>
          <Text > Additional Information: {listing.description}</Text>
        </View>
      </View>
      <View>
        <Button onPress={() => { props.navigation.navigate('ChatDetail', { author, bio, year }) }} title="Start Chat" />
        <Button onPress={() => { props.navigation.navigate('UserProf', { params }) }} title="View Profile" />
      </View>
    </View>
  )
}

export default ListingDetail
