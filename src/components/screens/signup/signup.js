import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { signupUser } from '../../../actions'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }

    this.onSignupClick = this.onSignupClick.bind(this)
    this.onSubmitClick = this.onSubmitClick.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
  }


  onSubmitClick() {
    const fields = {
      email: this.state.email,
      password: this.state.password,
    }

    // send the post off to be created
    this.props.signupUser(fields, this.props.history)
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
      </div>)
  }
}

// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default withRouter(connect(null, { signupUser })(SignUp))
