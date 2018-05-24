import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { connect } from 'react-redux'
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
    }
  }


  render() {
    return (
      <View>
        <View>
          <TextField
            label="Name"
            onChangeText={username => this.setState({ username })}
          />
          <TextField
            style={styles.inputField}
            label="Email"
            onChangeText={email => this.setState({ email })}
          />
          <TextField
            label="Password"
            onChangeText={password => this.setState({ password })}
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
