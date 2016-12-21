import React, { Component } from "react";
import {
  View,
  Text
}  from 'react-native';

import styles from "./eventStyles";
class Event extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <View style={{ flex: 1, borderWidth: 1, borderColor: "#666", padding: 10, marginBottom: 5}}>
        <Text>{this.props.event.title}</Text>
      </View>
  )}
}

export default Event;
