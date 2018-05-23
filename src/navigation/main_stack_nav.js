// import React from 'react';
import { createStackNavigator } from 'react-navigation'
// import Ionicons from 'react-native-vector-icons/FontAwesome';
// import { Button } from 'react-native';

// import VideoList from '../components/video_list';
// import VideoDetail from '../components/video_detail';
import Create from '../components/screens/createListing/createListing'
import Landing from '../components/screens/landing/landing'


// nest stack navigator to handle two internal views
const MainStackNavigator = createStackNavigator({
  // keys are the names of the "routes"
  Landing,
  Create,
})


export default MainStackNavigator
