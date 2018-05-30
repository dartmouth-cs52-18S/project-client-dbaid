import React, { Component } from 'react'
import { View, Button, Text, TouchableOpacity, ScrollView } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { Dropdown } from 'react-native-material-dropdown'
import NumericInput from 'react-native-numeric-input'
import DateTimePicker from 'react-native-modal-datetime-picker'
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
      location: 'Anywhere',
      isDateTimePickerVisibleStart: false,
      isDateTimePickerVisibleEnd: false,
      startTime: new Date(),
      endTime: new Date(),
    }
  }


  showDateTimePickerStart = () => this.setState({ isDateTimePickerVisibleStart: true });

  hideDateTimePickerStart = () => this.setState({ isDateTimePickerVisibleStart: false });

  handleDatePickedStart = (time) => {
    console.log('BANANA')
    console.log('A date has been picked: ', time.toLocaleString())
    this.setState({ startTime: time })
    this.hideDateTimePickerStart()
  };

  showDateTimePickerEnd = () => this.setState({ isDateTimePickerVisibleEnd: true });

  hideDateTimePickerEnd = () => this.setState({ isDateTimePickerVisibleEnd: false });

  handleDatePickedEnd = (time) => {
    console.log('APPLE')
    console.log('A date has been picked: ', time.toLocaleString())
    this.setState({ endTime: time })
    this.hideDateTimePickerEnd()
  };


  render() {
    const { startTime, endTime } = this.state
    const data = [{
      value: 'Collis',
    }, {
      value: 'HOP',
    }, {
      value: 'KAF',
    }, {
      value: 'Novack',
    }, {
      value: 'Foco',
    }, {
      value: 'Cube',
    }, {
      value: 'Onion',
    }, {
      value: 'McLaughlin',
    }, {
      value: 'EW',
    }]

    return (
      <ScrollView style={styles.root}>
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
              minValue={0}
              maxValue={500}
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

          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this.showDateTimePickerStart}>
              <Text>Choose a start time: </Text>
              <Text>{startTime.toLocaleTimeString()}</Text>
            </TouchableOpacity>
            <DateTimePicker
              mode="time"
              date={startTime}
              titleIOS="Choose a start time"
              isVisible={this.state.isDateTimePickerVisibleStart}
              onConfirm={this.handleDatePickedStart}
              onCancel={this.hideDateTimePickerStart}
              maximumDate={endTime}
            />
            <TouchableOpacity onPress={this.showDateTimePickerEnd}>
              <Text>Choose an end time: </Text>
              <Text>{endTime.toLocaleTimeString()}</Text>
            </TouchableOpacity>
            <DateTimePicker
              mode="time"
              date={endTime}
              titleIOS="Choose an end time"
              isVisible={this.state.isDateTimePickerVisibleEnd}
              onConfirm={this.handleDatePickedEnd}
              onCancel={this.hideDateTimePickerEnd}
              minimumDate={startTime}
            />
          </View>
          <TextField
            label="Extra Information"
            value={this.state.descripton}
            onChangeText={description => this.setState({ description })}
            keyboardType="default"
          />

          <Button
            onPress={() => {
              this.props.createListing(

                {
                  author: this.props.user,
                  description: this.state.description,
                  amount: this.state.amount,
                  location: this.state.location,
                  startTime: this.state.startTime,
                  endTime: this.state.endTime,
                },
                this.props, this.props.navigation.state.params.refresh,
              )
            }}
            title="Create Listing"
          />
        </View>
      </ScrollView>
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
