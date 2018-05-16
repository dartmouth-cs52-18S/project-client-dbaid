import React, { Component } from 'react'
import { Text, View, Button, ImageBackground } from 'react-native'
import axios from 'axios'

import styles from './screens/departure/styles'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
    }
    axios.get('https://db-aid.herokuapp.com/').then((response) => {
      this.setState({ message: response.data })
    },
    ).catch(error =>
    // hit an error do something else!
      error,
    )
  }
  render() {
    return (
      <ImageBackground
        style={{
          flex: 1,
          width: null,
          height: null,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}
        source={require('../../assets/fallBackground.png')}
        resizeMode="stretch"
        blurRadius={5}
      >
        <Button onPress={() => { this.props.navigation.navigate('From') }} title="Next" />
        <View style={styles.container}>
          <Text>{this.state.message}</Text>
        </View>
      </ImageBackground>
    )
  }
}


export default Home
