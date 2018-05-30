// import React from 'react';
import { createStackNavigator } from 'react-navigation'
// import Ionicons from 'react-native-vector-icons/FontAwesome';
// import { Button } from 'react-native';

import Local from '../components/screens/local/local'


// nest stack navigator to handle two internal views
const MainStackNavigator = createStackNavigator({
  // keys are the names of the "routes"
  Local,
})


export default MainStackNavigator
