import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
import MainNavigator from './main_stack_nav'
import Profile from '../components/screens/selfProf/selfProf'

const ChatTab = () => <View style={{ flex: 1, justifyContent: 'center' }}><Text>CHAT</Text></View>


const MainTabBar = createBottomTabNavigator({
  DBA: MainNavigator,
  Chat: ChatTab,
  Me: Profile,
}, {
  initialRouteName: 'DBA',
})


export default MainTabBar
