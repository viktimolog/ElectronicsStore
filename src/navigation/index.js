import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import NavigationStack from './navigationStack';

import {
  createNavigationPropConstructor,       
  createNavigationReducer,               
  createReactNavigationReduxMiddleware,  
  // initializeListeners,                   
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  'root', state => state.nav);

const navigationPropConstructor = createNavigationPropConstructor('root');

class AppNavigation extends Component {

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