import React, { Component } from 'react'
import { View, Button, TextInput, Image, ScrollView } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { connect } from 'react-redux'
import { ImagePicker } from 'expo'
import { bindActionCreators } from 'redux'
import { signupUser } from '../../../actions/index'

import styles from './styles'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      username: '',
      bio: '',
      year: 0,
      profilePic: null,
    }
  }
  // image picking from https://www.youtube.com/watch?v=d1nw3QdLv8w&index=8&list=PLN3n1USn4xlmqhVdKMurNREwtiUpq-SFy
  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    })

    if (!result.cancelled) {
      this.setState({ profilePic: `data:image/png;base64,${result.base64}` })
    }
  }


  render() {
    const { profilePic } = this.state
    return (
      <ScrollView>
        <View>
          <TextField
            label="Name"
            onChangeText={username => this.setState({ username })}
          />
          <Button
            title="Pick an image from camera roll"
            onPress={this.pickImage}
          />
          {profilePic ? (
            <Image source={{ uri: profilePic }} style={{ width: 200, height: 200, alignSelf: 'center' }} />) : null}
          <TextField
            style={styles.inputField}
            label="Email"
            onChangeText={email => this.setState({ email })}
          />
          <TextField
            secureTextEntry
            label="Password"
            onChangeText={password => this.setState({ password })}
          />
          <TextField
            label="Bio"
            onChangeText={bio => this.setState({ bio })}
          />
          <TextField
            label="Year"
            keyboardType="numeric"
            onChangeText={year => this.setState({ year })}
          />
        </View>
        <View>
          <Button
            onPress={() => { this.props.signupUser(this.state, this.props) }}
            title="Sign Up"
          />
        </View>
      </ScrollView>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signupUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp)
