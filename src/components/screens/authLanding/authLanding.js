import React, { Component } from 'react'
import { View, Button, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-looped-carousel'

import styles from './styles'

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
      <View style={styles.root}>
        <View style={styles.carouselContainer}>
          <Carousel
            delay={2000}
            style={this.state.size}
            autoplay
          >
            <Image
              resizeMode="contain"
              source={require('../../../../assets/carousel-slide-1.png')}
              style={styles.carouselImage}
            />
            <Image
              resizeMode="contain"
              source={require('../../../../assets/carousel-slide-2.png')}
              style={styles.carouselImage}
            />
            <Image
              resizeMode="contain"
              source={require('../../../../assets/carousel-slide-3.png')}
              style={styles.carouselImage}
            />
          </Carousel>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.signup}
            onPress={() => { this.props.navigation.navigate('AppFlow') }}
            title="Sign Up"
          />
          <Button
            style={styles.signin}
            onPress={() => { this.props.navigation.navigate('AppFlow') }}
            title="Sign In"
          />
        </View>
      </View>
    )
  }
}

export default AuthLanding