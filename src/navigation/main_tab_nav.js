import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MainNavigator from './main_stack_nav'
import ChatNavigator from './chat_stack_nav'// components/screens/chatList/chatList'
import LocalNavigator from './local_stack_nav'

import Profile from '../components/screens/selfProf/selfProf'

// const ChatTab = () => <View style={{ flex: 1,
// justifyContent: 'center' }}><Text>CHAT</Text></View>


const MainTabBar = createBottomTabNavigator({
  DBA: MainNavigator,
  Chat: ChatNavigator,
  Local: LocalNavigator,
  Me: Profile,
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'DBA') {
        iconName = `ios-card${focused ? '' : '-outline'}`
      } else if (routeName === 'Chat') {
        iconName = `ios-chatbubbles${focused ? '' : '-outline'}`
      } else if (routeName === 'Local') {
        iconName = `ios-pin${focused ? '' : '-outline'}`
      } else if (routeName === 'Me') {
        iconName = `ios-contact${focused ? '' : '-outline'}`
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />
    },
  }),
  tabBarOptions: {
    activeTintColor: '#219653',
    inactiveTintColor: 'gray',
  },
}, {
  initialRouteName: 'DBA',
})


export default MainTabBar
