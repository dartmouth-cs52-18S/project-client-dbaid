import React from 'react'
import { View, Image, Text, Button, ScrollView } from 'react-native'

import styles from './styles'

const ChatDetail = props =>
  // const userID = props.navigation.state.params.userID
  (
    <View>
      <View>
        <Button onPress={() => { props.navigation.navigate('ChatList') }} title="See All Chats" />
      </View>
      <View>
        <Image
          style={styles.image}
          source={require('../../../../assets/profileOne.png')}
        />
        <View>
          <Text>CHAT WITH ME TO COORDINATE!</Text>
        </View>
      </View>
    </View>
  )


export default ChatDetail
