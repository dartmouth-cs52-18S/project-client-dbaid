import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'

const UserProf = (props) => {
  console.log(props)
  const author = props.navigation.state.params.params.author
  const bio = props.navigation.state.params.params.bio
  const year = props.navigation.state.params.params.year
  return (
    <View style={styles.root}>
      <View style={styles.profile}>
        <Image
          style={styles.image}
          source={require('../../../../assets/profileOne.png')}
        />
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
