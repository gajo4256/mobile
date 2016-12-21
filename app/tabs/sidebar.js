import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { changeTab } from "./actions";

import logo from "../img/jszgb.png";

class Sidemenu extends Component {
  constructor(props) {
    super(props);
    this.menuChaged = this.menuChaged.bind(this);
  }
  menuChaged(item) {
    this.props.dispatch(changeTab(item));
    this.props.closeDrawer();
  }
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#f5f4f2', paddingTop: 30}}>
        <View style={{marginBottom:10, alignItems:'center'}}>
          <Image
            source={logo} style={{marginLeft: 20, width: 100, height: 100}}
            resizeMode="contain"
            />
          <Text style={{fontSize: 25, marginLeft: 20, marginTop: 5}}>JavaScript Zagreb</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.elementContainer}
            onPress={() => this.menuChaged("news")}>
              <Text style={styles.title}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.elementContainer}
            onPress={() => this.menuChaged("events")}>
              <Text style={styles.title}>Events</Text>
          </TouchableOpacity>
        </View>
    </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop:70
  },
  buttonText: {
    fontSize: 16,
    color: '#f5f4f2',
    alignSelf: 'center'
	},
  elementContainer: {
    flexDirection: 'row',
    paddingTop:11,
    paddingBottom:11,
    paddingLeft: 11,
    borderColor: '#004b78',
    borderBottomWidth: 0.2,
  },
  title: {
    fontSize:16,
    marginLeft:10,
    color:'black'
  },
});
export default Sidemenu;
