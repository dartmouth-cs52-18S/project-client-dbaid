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
            author: this.props.navigation.state.params.author,
            bio: this.props.navigation.state.params.bio,
            year: this.props.navigation.state.params.year,
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
        params={this.props.navigation.state.params}
        // author={this.state.author}
        // bio={this.state.bio}
        // year={this.state.year}
        onSend={messages => this.onSend(messages)}
        onPressAvatar={(params) => { this.props.navigation.navigate('UserProf', { params }) }}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

export default ChatDetail
