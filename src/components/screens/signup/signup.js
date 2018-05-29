import React, { Component } from 'react'
import { View, Button, TextInput, Image } from 'react-native'
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
      image: null,
    }
  }
  // image picking from https://www.youtube.com/watch?v=d1nw3QdLv8w&index=8&list=PLN3n1USn4xlmqhVdKMurNREwtiUpq-SFy
  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })

    console.log(result.uri)

    if (!result.cancelled) {
      this.setState({ image: result.uri })
    }
  }


  render() {
    const { image } = this.state
    return (
      <View>
        <View>
          <TextField
            label="Name"
            onChangeText={username => this.setState({ username })}
          />
          <Button
            title="Pick an image from camera roll"
            onPress={this.pickImage}
          />
          {image ? (
            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />) : null}
          <TextField
            style={styles.inputField}
            label="Email"
            onChangeText={email => this.setState({ email })}
          />
          <TextField
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
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signupUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp)
