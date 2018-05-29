import React from 'react'
import { View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

import styles from './styles'

const UserProf = (props) => {
  console.log(props.user)
  return (
    <View style={styles.root}>
      <View style={styles.profile}>
        <Image
          style={styles.image}
          source={require('../../../../assets/profileOne.png')}
        />
        <View style={styles.info}>
          <Text style={styles.text}>{props.user.username}</Text>
          <Text style={styles.text}>{props.user.year}</Text>
        </View>
      </View>
      <Text style={styles.under}>{props.user.bio}</Text>
    </View>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps)(UserProf)
