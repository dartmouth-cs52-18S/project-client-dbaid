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
import { View, Image, Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { fetchMessages, sendMessage } from '../../../redux/reducers/actions'

import styles from './styles'

class ChatDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      // avatar: require('../../../../assets/profileOne.png'),
    }

    this.imagePath = this.imagePath.bind(this)
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hey! When do you want to meet up?',
          createdAt: new Date(),
          user: {
            _id: 2,
            listing: this.props.navigation.state.params.params.listing,
            avatar: require('../../../../assets/default.png'),
            // avatar: //this.imagePath(this.props.navigation.state.params.params.listing),
            // { uri: this.props.navigation.state.params.params.listing.author.profilePic },
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

  imagePath(listing) {
    if (listing.author === null || listing.author.profilePic === null) {
      return (
        require('../../../../assets/default.png')
        // <Image source={require('../../../../assets/default.png')} style={styles.image} />
      )
    }
    const base64 = listing.author.profilePic
    return { uri: base64 }// (<Image source={{ uri: base64 }} style={styles.image} />)
  }

  renderAvatar(listing) {
    this.setState({
      avatar: this.imagePath(this.props.navigation.state.params.params.listing) },
    )
  }

  render() {
    console.log('chat listing?')
    console.log(this.props.navigation.state.params.params)
    if (this.props == null || this.props.navigation.state.params == null) {
      return (
        <View>
          <Text>You have not started a chat with anyone!</Text>
        </View>
      )
    }

    return (
      <GiftedChat
        messages={this.state.messages}
        params={this.state.listing}
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
