// import React from 'react';
import { createStackNavigator } from 'react-navigation'
// import Ionicons from 'react-native-vector-icons/FontAwesome';
// import { Button } from 'react-native';

// import VideoList from '../components/video_list';
// import VideoDetail from '../components/video_detail';
import Home from '../components/home'
import Departure from '../components/screens/departure/departure'


// nest stack navigator to handle two internal views
const MainNavigator = createStackNavigator({
  // keys are the names of the "routes"
  Landing: Home,
  From: Departure,
})


export default MainNavigator
