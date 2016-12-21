import React, { Component } from "react";
import {
  View
}  from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';

import SideMenu from "./sidebar";
import News from "../news/news";
import Upcomming from "../events/events";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
  }
  openDrawer() {
   this.drawer.openDrawer()
  }
  renderContent() {
    return (
      <Upcomming
        openDrawer={this.openDrawer}
      />);
  }
  render() {
    const { Left } = DrawerLayout.positions;
    const navigationView = <SideMenu onSelected={()=>{}}/>;
    return (
      <DrawerLayout
        ref={(drawer) => this.drawer = drawer }
        drawerPosition={Left}
        drawerWidth={284}
        renderNavigationView={() => navigationView}
      >
        {this.renderContent()}
      </DrawerLayout>
    )
  }
}

export default Tabs;
