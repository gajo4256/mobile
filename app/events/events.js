import React, { Component } from "react";
import {
  ScrollView,
  View,
  ActivityIndicator
}  from 'react-native';
import { connect } from "react-redux";
import NavigationBar from 'react-native-navbar';

import { getUpcomming } from "./actions"

import Upcomming from "./upcomming";
import Past from "./past";

class Events extends Component {
  componentDidMount() {
    this.props.dispatch(getUpcomming());
  }
  render() {
    const { past, future} = this.props.events;
    return (
      <ScrollView style={{ flex: 1 }}>
        <NavigationBar
          title={{ title: "Events"}}
          leftButton={{ title: "Menu", handler: this.props.openDrawer }}
        />
        <View style={{ padding: 10 }}>
          {this.props.fetching ? <ActivityIndicator /> :
          (
            <View>
              <Upcomming events={future} />
              <Past events={past} />
            </View>
          )}
        </View>
      </ScrollView>
  )}
}

export default connect((store) => {
  return {
    events: store.events.events,
    fetching: store.events.fetching,
  }
})(Events);
