import React, { Component } from "react";
import { connect } from "react-redux";

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
    let content = (
      <Upcomming
        openDrawer={this.openDrawer}
      />
    );
    if(this.props.tab === "news"){
      content = (
        <News
          openDrawer={this.openDrawer}
        />
      );
    }
    return content;
  }
  render() {
    const { Left } = DrawerLayout.positions;
    const navigationView = <SideMenu dispatch={this.props.dispatch} />;
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

export default connect((store) => {
  return {
    tab: store.tabs.tab
  }
})(Tabs);
