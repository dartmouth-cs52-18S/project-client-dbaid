import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'

const UserProf = (props) => {
  const name = props.navigation.state.params.name
  const bio = props.navigation.state.params.bio
  const year = props.navigation.state.params.year
  return (
    <View style={styles.root}>
      <View style={styles.profile}>
        <Image
          style={styles.image}
          source={require('../../../../assets/profileOne.png')}
        />
        <View style={styles.info}>
          <Text style={styles.text}>{ name }</Text>
          <Text style={styles.text}>{ year }</Text>
        </View>
      </View>
      <Text style={styles.under}>{ bio }</Text>
    </View>
  )
}

export default UserProf
