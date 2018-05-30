import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { Dropdown } from 'react-native-material-dropdown'
import NumericInput from 'react-native-numeric-input'
import { connect } from 'react-redux'

import { createListing } from '../../../redux/reducers/actions'

import styles from './styles'

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      name: '',
      description: '',
      amount: 0,
      location: '',
    }
    console.log('CREATE PROPS')
    console.log(props)
  }


  render() {
    const data = [{
      value: 'Collis',
    }, {
      value: 'HOP',
    }, {
      value: 'KAF',
    }, {
      value: 'Novak',
    }, {
      value: 'FOCO',
    }, {
      value: 'Cube',
    }, {
      value: 'Onion',
    }]
    return (
      <View style={styles.root}>
        <View style={styles.amount}>
          <Text style={styles.amountTitle}> Enter DBA Donation Amount </Text>
          <View style={styles.numberInput}>
            <NumericInput
              value={this.state.amount}
              onChange={amount => this.setState({ amount })}
              totalWidth={400}
              totalHeight={100}
              iconSize={25}
              step={1}
              valueType="real"
              rounded
              textColor="#000000"
              iconStyle={{ color: 'white' }}
              rightButtonBackgroundColor="#2196F3"
              leftButtonBackgroundColor="#2196F3"
            />
          </View>
        </View>
        <View style={styles.under}>
          <Dropdown
            label="Donation Location"
            data={data}
            onChangeText={(location, index, dat) => {
              this.setState({ location })
              // console.log(dat)
            }}
          />
          <TextField
            label="Extra Information"
            value={this.state.descripton}
            onChangeText={description => this.setState({ description })}
            keyboardType="default"
          />

          <Button
            onPress={() => {
              console.log(this.props.user)
              this.props.createListing(

                {
                  author: this.props.user,
                  description: this.state.description,
                  amount: this.state.amount,
                  location: this.state.location,
                },
                this.props, this.props.navigation.state.params.refresh,
              )
            }}
            title="Create Listing"
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => (
  {
    listings: state.listings.all,
    user: state.auth.user,
  }
)

const mapDispatchToProps = {
  createListing,
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)
