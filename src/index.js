// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

import MainNavigator from './navigation/main_stack_nav'

// import Entry from 'app/components/screens/entry'

type State = {
  yoState: string,
}

// class Root extends Component<Props, State> {
class Root extends Component<null, State> {
  constructor(props) {
    super(props)

    this.state = {
      yoState: 'yo',
    }
  }

  render() {
    return <MainNavigator />
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Root)
export default connect(null, null)(Root)
