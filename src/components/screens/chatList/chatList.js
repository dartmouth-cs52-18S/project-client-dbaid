import React, { Component } from 'react'
import { View, Image, Text, Button, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { fetchChats, setChat } from '../../../redux/reducers/actions'

import styles from './styles'

class ChatList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
    }
  }

  componentDidMount() {
    console.log('fetching in list')
    console.log(this.props)
    this.props.fetchChats({ userID: this.props.user.id })
    console.log('post fetch in list')
    console.log(this.props)
  // this.props.fetchListings()
  // const willFocusSubscription = this.props.navigation.addListener(
  //   'willFocus',
  //   (payload) => {
  //     this.props.fetchChats()
  //   },
  // )
  }
  //  const userID = props.navigation.state.params.userID
  render() {
    if (this.props.chats == null) {
      return (
        <View />
      )
    }
    return (
    // <ScrollView>
      <View style={styles.root}>
        <Text>You have not started a chat with anyone!</Text>
      </View>
    // { this.props.chats.map(chat => (
    //   <TouchableOpacity
    //     onPress={() => {
    //       this.props.navigation.navigate('ChatDetail',
    //         { chat, user: this.props.user })
    //     }}
    //     style={styles.entries}
    //     key={chat._id}
    //   >
    //     <Image
    //       source={require('../../../../assets/profileOne.png')}
    //     />
    //     <Text> Individual Chat! </Text>
    //   </TouchableOpacity>
    // )) }
    // </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  chats: state.chats.all,
  user: state.auth.user,
})

const mapDispatchToProps = {
  fetchChats,
  setChat,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
