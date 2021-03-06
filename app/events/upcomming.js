import React, { Component } from "react";
import {
  View,
  Text
}  from 'react-native';

import Event from "./event";

import styles from "./eventStyles";

class Upcomming extends Component {
  renderEvent(e, i) {
    return <Event key={i} event={e} />
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Upcomming</Text>
        <View>
          {this.props.events.map(this.renderEvent)}
        </View>
      </View>
  )}
}

export default Upcomming;
