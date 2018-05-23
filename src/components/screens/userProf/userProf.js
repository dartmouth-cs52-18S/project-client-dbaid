import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'

const UserProf = (props) => {
  const name = props.navigation.state.params.name
  const bio = props.navigation.state.params.bio
  const year = props.navigation.state.params.year
  return (
    <View style={styles.root}>
      <Image
        source={require('../../../../assets/profileOne.png')}
      />
      <Text style={styles.text}>{ name }</Text>
      <Text style={styles.text}>{ year }</Text>
      <Text style={styles.text}>{ bio }</Text>
    </View>
  )
}

export default UserProf
