import React, { Component } from 'react'
import { View, Image, Text, Button, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { createChat, fetchChats, setChat } from '../../../redux/reducers/actions'

import styles from './styles'

function renderImage(listing) {
  if (listing.author === null || listing.author.profilePic === null) {
    console.log('Img for listing is null')
    return (
      <Image source={require('../../../../assets/default.png')} style={styles.image} />
    )
  }
  const base64 = listing.author.profilePic
  // console.log('BANANA')
  // console.log(base64)
  return (<Image source={{ uri: base64 }} style={styles.image} />)
}

function getTimeString(listing) {
  const date = new Date(listing.startTime)
  if (listing.startTime === null || date.toLocaleTimeString() === undefined) return ('None')
  const time = date.toLocaleTimeString()
  // console.log(time)
  return time
}

class ListingDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // listing,
      // params: props.navigation.state.params,
    }
    // console.log('LISTING DETAIL PROPS')
    // console.log(props)
    this.findChat = this.findChat.bind(this)
  }

  componentDidMount() {
    console.log('fetching chats')
    this.props.fetchChats({ userID: this.props.user.id })
    console.log(this.props)
  }

  // const author = props.navigation.state.params.author
  // const bio = props.navigation.state.params.bio
  // const year = props.navigation.state.params.year


  findChat = (otherID) => {
    const findChat = this.props.user.chats.find(
      chat => chat.otherID === otherID,
    )
    return findChat
  };

  render() {
    const params = this.props.navigation.state.params
    const listing = this.props.navigation.state.params.listing
    console.log('LISTING IN RENDER PROPS')
    console.log(this.props)
    // console.log('LISTING IN RENDER STATE')
    // console.log(listing)
    return (
      <View style={styles.root}>
        <View style={styles.profile}>
          {renderImage(listing)}
          <View style={styles.profile}>
            <Text style={styles.text}> Author:{listing.author.username}</Text>
            <Text style={styles.text}> DBA Amount: {listing.amount} </Text>
            <Text style={styles.text}> Location: {listing.location} </Text>
            <Text style={styles.text}> Time: {getTimeString(listing)}</Text>
            <Text style={styles.info}> Additional Information: {listing.description}</Text>
          </View>
        </View>
        <View>
          <Button
            onPress={() => {
              const chat = this.findChat(listing.author._id)
              if (chat && chat.id) {
                this.props.setChat(chat.id)
                this.props.navigate('ChatDetail', { params })
              } else {
                this.props.addFriend(
                  { friendID: listing.author._id })
                this.props.createChat(
                  {
                    userID: this.props.user.id,
                    otherID: listing.author._id,
                  })
                this.props.navigation.navigate('ChatDetail', { params })
              }
            }}
            title="Start Chat"
          />
          <Button onPress={() => { this.props.navigation.navigate('UserProf', { params }) }} title="View Profile" />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => (
  {
    listings: state.listings.all,
    chats: state.chats.all,
    user: state.auth.user,
  }
)

const mapDispatchToProps = {
  createChat,
  fetchChats,
  setChat,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingDetail)

// export default ListingDetail
