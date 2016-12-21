import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator
}  from 'react-native';
import { connect } from "react-redux";
import NavigationBar from 'react-native-navbar';
import Markdown from 'react-native-simple-markdown'

import { getNews } from "./actions"

class News extends Component {
  componentDidMount() {
    this.props.dispatch(getNews());
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <NavigationBar
          title={{ title: "News"}}
          leftButton={{ title: "Menu", handler: this.props.openDrawer }}
        />
        <View style={{ paddingHorizontal: 10}}>
          {this.props.news.length ?
          <Markdown>
            {this.props.news[0].toString()}
          </Markdown>
          : <ActivityIndicator />}
        </View>
      </ScrollView>
  )}
}

export default connect((store) => {
  return {
    news: store.news.posts
  }
})(News);
