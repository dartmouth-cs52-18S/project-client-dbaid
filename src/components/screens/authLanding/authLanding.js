import React, { Component } from 'react'
import { View, Text, Button, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-looped-carousel'

// import styles from './styles'

const { width, height } = Dimensions.get('window')

class AuthLanding extends Component {
  constructor(props) {
    super(props)

    this.state = {
      size: { width, height },
    }
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout
    this.setState({ size: { width: layout.width, height: layout.height } })
  };

  render() {
    return (
      <View>
        <Text>dbAid</Text>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay
        >
          <Image
            source={require('../../../../assets/carousel-slide-1.png')}
          />
          <Image
            source={require('../../../../assets/carousel-slide-2.png')}
          />
          <Image
            source={require('../../../../assets/carousel-slide-3.png')}
          />
        </Carousel>
        <Button onPress={() => { this.props.navigation.navigate('Landing') }} title="Sign Up" />
        <Button onPress={() => { this.props.navigation.navigate('Landing') }} title="Sign In" />
      </View>
    )
  }
}

export default AuthLanding
