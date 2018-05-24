import React from 'react'
import { View, Image, Text, Button, ScrollView, TouchableOpacity } from 'react-native'

import styles from './styles'

const ChatList = props =>
//  const userID = props.navigation.state.params.userID
  (
    <ScrollView>
      <View>
        {/* props.chats.map(chat => (
          <TouchableOpacity onPress={() => { props.navigation.navigate('ChatDetail',
          { userID  }) }} style={styles.entries} key={chat._id}>
            <Image
              source={require('../../../../assets/profileOne.png')}
            />
            <Text> Here are all of your chats! </Text>
          </TouchableOpacity>
        )) */}
        <Text> Here are all of your chats! </Text>
      </View>
    </ScrollView>
  )


export default ChatList
