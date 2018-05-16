import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { updateDeparture } from '../../../redux/reducers/actions'

class Departure extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: 'general',
      clicked: false,
    }
  }

  render() {
    return (
      <View />
    )
  }
}


const mapStateToProps = state => (
  {
    booking: state.booking,
  }
)

const mapDispatchToProps = {
  updateDeparture,
}

export default connect(mapStateToProps, mapDispatchToProps)(Departure)
