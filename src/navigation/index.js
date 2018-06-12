import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import NavigationStack from './navigationStack';

import {
  createNavigationPropConstructor,
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  'root', state => state.nav);

const navigationPropConstructor = createNavigationPropConstructor('root');

class AppNavigation extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
}

onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
        return false;
    }
    dispatch(NavigationActions.back());
    return true;
};

  render() {
    const navigation = navigationPropConstructor(
      this.props.dispatch,
      this.props.nav
    );
    return (
      <NavigationStack navigation={navigation} />
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppNavigation);
