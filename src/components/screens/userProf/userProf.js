import React from 'react'
import { View, Image, Text } from 'react-native'

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

const UserProf = (props) => {
  const author = props.navigation.state.params.params.listing.author.username
  const bio = props.navigation.state.params.params.listing.author.bio
  const year = props.navigation.state.params.params.listing.author.year
  return (
    <View style={styles.root}>
      <View style={styles.profile}>
        {renderImage(props.navigation.state.params.params.listing)}
        <View style={styles.info}>
          <Text style={styles.text}>{ author }</Text>
          <Text style={styles.text}>{ year }</Text>
        </View>
      </View>
      <Text style={styles.under}>{ bio }</Text>
    </View>
  )
}

export default UserProf
