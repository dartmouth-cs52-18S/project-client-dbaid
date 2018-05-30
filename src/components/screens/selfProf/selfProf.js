import React from 'react'
import { View, Image, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import { signoutUser } from '../../../actions/index'
import styles from './styles'

function renderImage(user) {
  if (user === null || user.profilePic === null) {
    return (
      <Image source={require('../../../../assets/default.png')} style={styles.image} />
    )
  }
  const base64 = user.profilePic
  return (<Image source={{ uri: base64 }} style={styles.image} />)
}

const UserProf = props => (
  <View style={styles.root}>
    <View style={styles.profile}>
      {renderImage(props.user)}
      <View style={styles.info}>
        <Text style={styles.text}>{props.user.username}</Text>
        <Text style={styles.text}>{props.user.year}</Text>
      </View>
    </View>
    <Text style={styles.under}>{props.user.bio}</Text>
    <Button onPress={() => this.props.signoutUser(this.props)} title="Sign Out" />
  </View>
)

const mapStateToProps = state => ({
  user: state.auth.user,
})

const mapDispatchToProps = {
  signoutUser,
}

export default connect(mapStateToProps)(UserProf)
