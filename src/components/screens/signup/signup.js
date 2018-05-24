import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import styles from './styles'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      username: '',
    }
  }


  render() {
    return (
      <View>
        <View>
          <TextInput
            style={styles.inputField}
            label="Name"
            onChangeText={username => this.setState({ username })}
          />
          <TextInput
            style={styles.inputField}
            label="Email"
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.inputField}
            label="Password"
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View>
          <Button
            onPress={() => { this.props.navigation.navigate('AppFlow') }}
            title="Sign Up"
          />
        </View>
      </View>
    )
  }
}

export default SignUp
