import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import Store from "./app/store";
import Routes from "./app/routes";

class JsZgb extends Component {
  renderScene(route, navigator) {
    const Component = route.component;
    return (
      <Component
        route={route}
        {...route.passProps}
        navigator={navigator}
        topNavigator={navigator}
      />
    );
  }
render() {
  return (
    <Provider store={Store}>
      <Navigator
        initialRoute={Routes.tabs}
        renderScene={this.renderScene}
      />
    </Provider>
  );
}
}

AppRegistry.registerComponent('jszgbMobile', () => JsZgb);
