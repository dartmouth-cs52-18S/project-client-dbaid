import React, { Component } from 'react'
import { View, Button, TextInput, Image, Text, ScrollView } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signinUser } from '../../../actions/index'

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
      <KeyboardAwareScrollView>
        <View>
          <Image
            style={{ width: '100%', height: 300, alignSelf: 'center' }}
            source={require('../../../../assets/dartmouth.png')}
          />
          <Text style={{ fontSize: 30, alignSelf: 'center', marginTop: 10 }}>
            Sign in to access the app!
          </Text>
          <TextField
            autoCapitalize="none"
            label="Email"
            onChangeText={email => this.setState({ email })}
          />
          <TextField
            secureTextEntry
            autoCapitalize="none"
            label="Password"
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View>
          <Button
            onPress={() => { this.props.signinUser(this.state, this.props) }}
            title="Sign In"
          />
          <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 10 }}>
            No account? Make one today!
          </Text>
          <Button
            style={styles.signup}
            onPress={() => { this.props.navigation.navigate('SignUp') }}
            title="Sign Up"
          />
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signinUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignIn)
