import React from 'react'
import { View, Image, Text, Button, ScrollView } from 'react-native'

import styles from './styles'

const ListingDetail = (props) => {
  const name = props.navigation.state.params.name
  const bio = props.navigation.state.params.bio
  const year = props.navigation.state.params.year
  const listing = props.navigation.state.params.listing
  return (
    <View>
      <View>
        <Image
          style={styles.image}
          source={require('../../../../assets/profileOne.png')}
        />
        <View>
          <Text >{ name }</Text>
          <Text >{ year }</Text>
          <Text> Selling $100 dba for $20! </Text>
        </View>
      </View>
      <View>
        <Button onPress={() => { props.navigation.navigate('ChatDetail', { /* userID: listing.ownerID */}) }} title="Start Chat" />
        <Button onPress={() => { props.navigation.navigate('UserProf', { /* userID: listing.ownerID/ */ }) }} title="View Profile" />
      </View>
    </View>
  )
}

export default ListingDetail
