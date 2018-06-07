import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { ImagePicker } from 'expo'
import { TextField } from 'react-native-material-textfield'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { signoutUser, updateUser } from '../../../actions/index'
import styles from './styles'

function renderImage(user) {
  if (user === null || user.profilePic === null) {
    return (
      <Image source={require('../../../../assets/default.png')} style={styles.image} />
    )
  }
  const base64 = user.profilePic
  return (<Image source={{ uri: base64 }} style={styles.image} />)
}

class UserProf extends Component {
  constructor(props) {
    super(props)

    this.state = {
      edit: false,
      year: this.props.user.year,
      bio: this.props.user.bio,
      profilePic: this.props.user.profilePic,
    }
  }

  // image picking from https://www.youtube.com/watch?v=d1nw3QdLv8w&index=8&list=PLN3n1USn4xlmqhVdKMurNREwtiUpq-SFy
  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    })

    if (!result.cancelled) {
      this.setState({ profilePic: `data:image/png;base64,${result.base64}` })
    }
  }


  submitChange = () => {
    this.props.updateUser(this.props.user.id, { bio: this.state.bio })
    this.setState({ edit: !this.state.edit })
  }

  renderBio = (user) => {
    if (this.state.edit === false) {
      return (<Text style={styles.under}>{this.state.bio}</Text>)
    }
    return (
      <View>
        <TextField
          label="Bio"
          value={this.state.bio}
          onChangeText={bio => this.setState({ bio })}
          keyboardType="default"
        />
        <Button onPress={this.submitChange} title="Submit" />
      </View>)
  }

  renderYear = (user) => {
    if (this.state.edit === false) {
      return (<Text style={styles.text}>{user.year}</Text>)
    }
    return (<Text style={styles.text}>{user.year}</Text>)
  }


  render() {
    return (
      <KeyboardAwareScrollView style={styles.root}>
        <View style={styles.profile}>
          {renderImage(this.props.user)}
          <View style={styles.info}>
            <Text style={styles.text}>{this.props.user.username}</Text>
            {this.renderYear(this.props.user)}
          </View>
        </View>
        {this.renderBio(this.props.user)}
        <Button onPress={() => this.setState({ edit: !this.state.edit })} title="Edit Profile" />
        <Button onPress={() => this.props.signoutUser(this.props)} title="Sign Out" />
      </KeyboardAwareScrollView>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
})

const mapDispatchToProps = {
  signoutUser,
  updateUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProf)
