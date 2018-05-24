// import React from 'react';
import { createStackNavigator } from 'react-navigation'
// import Ionicons from 'react-native-vector-icons/FontAwesome';
// import { Button } from 'react-native';

import Create from '../components/screens/createListing/createListing'
import Landing from '../components/screens/landing/landing'
import ListingDetail from '../components/screens/listingDetail/listingDetail'
import UserProf from '../components/screens/userProf/userProf'
import ChatDetail from '../components/screens/chatDetail/chatDetail'
import ChatList from '../components/screens/chatList/chatList'


// nest stack navigator to handle two internal views
const MainNavigator = createStackNavigator({
  // keys are the names of the "routes"
  Landing,
  Create,
  ListingDetail,
  UserProf,
  ChatDetail,
  ChatList,
})


export default MainNavigator
