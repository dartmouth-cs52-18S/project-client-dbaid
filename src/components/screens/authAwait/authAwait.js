import React from 'react'
import { ActivityIndicator, Text, AsyncStorage, View } from 'react-native'
import styles from './styles'

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  // Fetch the token from storage then navigate accordingly
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')

    // Switches to the App screen or Auth flow depending on if the token exists
    this.props.navigation.navigate(userToken ? 'AppFlow' : 'AuthFlow')
  };

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.name}>dbAid</Text>
        <ActivityIndicator size="small" color="#ffffff" />
      </View>
    )
  }
}

export default AuthLoadingScreen
