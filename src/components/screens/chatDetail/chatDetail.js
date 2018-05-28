// import React, { Component } from 'react'
// import { View, Image, Text, Button, ScrollView, TouchableOpacity } from 'react-native'
// import { GiftedChat } from 'react-native-gifted-chat'
// import { connect } from 'react-redux'
// import { fetchMessages, sendMessage } from '../../../redux/reducers/actions'


/*
  {this.props.messages.map(listing => (
    <TouchableOpacity onPress={() => {
     this.props.navigation.navigate('ChatList', { chat: this.props }) }}
      style={styles.entries} key={listing._id}>
      <Text> {this.state.messages} </Text>
    </TouchableOpacity>
  ))} */


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


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
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
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Sup boys',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'DBA daddy',
            avatar: require('../../../../assets/profileOne.png'),
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

  render() {
    // console.log('chat props')
    // console.log(this.props)
    if (this.props == null) {
      return (
        <View />
      )
    }

    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        onPressAvatar={() => { this.props.navigation.navigate('UserProf', this.props) }}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

export default ChatDetail
