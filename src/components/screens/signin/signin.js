import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import styles from './styles'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }


  render() {
    return (
      <View>
        <View>
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
            title="Sign In"
          />
        </View>
      </View>
    )
  }
}

export default SignIn
