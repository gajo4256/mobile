import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text
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
        <View style={{ paddingLeft: 30, paddingRight: 30}}>
          {this.props.news.length ?
          <Markdown>
            {this.props.news[0]}
          </Markdown>
          : <Text>Nema</Text>}
        </View>
      </ScrollView>
  )}
}

export default connect((store) => {
  return {
    news: store.news.posts
  }
})(News);
