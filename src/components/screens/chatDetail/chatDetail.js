import React, { Component } from 'react'
import { View, Image, Text, Button, ScrollView, TouchableOpacity } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

import { connect } from 'react-redux'
import { fetchMessages, sendMessage } from '../../../redux/reducers/actions'

import styles from './styles'

class ChatDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      userId: null,
    }
  }
  // const userID = props.navigation.state.params.userID

  componentWillMount() {
    // this.props.fetchMessages()
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  /*
  {this.props.messages.map(listing => (
    <TouchableOpacity onPress={() => {
     this.props.navigation.navigate('ChatList', { chat: this.props }) }}
      style={styles.entries} key={listing._id}>
      <Text> {this.state.messages} </Text>
    </TouchableOpacity>
  ))} */

  render() {
    console.log(this.state)
    return (
      <View>
        <View>
          <Button onPress={() => { this.props.navigation.navigate('ChatList') }} title="See All Chats" />
        </View>
        <View>
          <Image
            style={styles.image}
            source={this.state.avatar}
          />
          <View style={styles.entry}>
            <Text> {this.state._id} </Text>
          </View>
          <View>
            <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              user={{
                _id: 1,
              }}
            />
          </View>
        </View>
      </View>
    )
  }
}

// const mapStateToProps = state => (
//   {
//     messages: state.messages,
//   }
// )
//
// const mapDispatchToProps = {
//   fetchMessages,
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ChatDetail)

export default ChatDetail
