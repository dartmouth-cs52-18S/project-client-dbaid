import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { createListing } from '../../../redux/reducers/actions'

// import styles from './styles'

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
    }
  }


  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter Listing Description"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ description: text })}
          value={this.state.descripton}
        />
        <Button
          onPress={() => {
            this.props.createListing({ description: this.state.description },
              this.props, this.props.navigation.state.params.refresh)
          }}
          title="Create Listing"
        />
      </View>
    )
  }
}

const mapStateToProps = state => (
  {
    listings: state.listings.all,
  }
)

const mapDispatchToProps = {
  createListing,
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)
