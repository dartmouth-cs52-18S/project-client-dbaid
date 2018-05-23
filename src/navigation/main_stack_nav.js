// import React from 'react';
import { createStackNavigator } from 'react-navigation'
// import Ionicons from 'react-native-vector-icons/FontAwesome';
// import { Button } from 'react-native';

// import VideoList from '../components/video_list';
// import VideoDetail from '../components/video_detail';
import Create from '../components/screens/createListing/createListing'
import Landing from '../components/screens/landing/landing'
import AuthLanding from '../components/screens/authLanding/authLanding'


// nest stack navigator to handle two internal views
const MainNavigator = createStackNavigator({
  // keys are the names of the "routes"
  AuthLanding,
  Landing,
  Create,
})


export default MainNavigator
