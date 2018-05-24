import React, { Component } from 'react'
// import { View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { signinUser } from '../../../actions'


// import styles from './styles'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }

    this.onLoginClick = this.onLoginClick.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onSubmitClick = this.onSubmitClick.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
  }

  onSubmitClick() {
    const fields = {
      email: this.state.email,
      password: this.state.password,
    }

    this.setState({
      modal: false,
    })

    // send the post off to be created
    this.props.signinUser(fields, this.props.history)
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <div>
        <div id="resultsModal" className="modal">
          <div id="resultsModalContent" className="modalContent">
            <p className="result1" id="modalText">Enter your credentials and hit submit!</p>
            <labelhtml For="email">Email</labelhtml>
            <input onChange={this.onEmailChange} name="email" value={this.state.email} />
            <labelhtml For="password">password</labelhtml>
            <input onChange={this.onPasswordChange} name="password" value={this.state.password} />
            <button onClick={this.onSubmitClick}>Submit</button>
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(connect(null, { signinUser })(SignIn))
