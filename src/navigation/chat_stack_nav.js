// import React from 'react';
import { createStackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native'

import ChatDetail from '../components/screens/chatDetail/chatDetail'
import ChatList from '../components/screens/chatList/chatList'


// nest stack navigator to handle two internal views
const ChatNavigator = createStackNavigator({
  // keys are the names of the "routes"
  ChatList,
  ChatDetail,
})


export default ChatNavigator
