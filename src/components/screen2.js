import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import ItemDetails from './ItemDetails'
import {TextConstants} from '../constants/TextConstants'
import {
  setCurItem,
  setAuthorization
 } from '../actions/actionCreator';

class Screen2View extends Component {
  static navigationOptions = {
    title: TextConstants.TITLESCREEN2
  };

  // navigate = () => {
  //   const navigateToScreen1 = NavigationActions.navigate({
  //     routeName: "screen1",
  //     // params: { name: "Shubhnik 2 screen" }
  //   });
  //   this.props.navigation.dispatch(navigateToScreen1);
  // };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
        <ItemDetails
        item={this.props.curItem}
        authorization={this.props.authorization}
        reviews = {this.props.reviews}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  curItem: state.mainReducer.curItem,
  authorization: state.mainReducer.authorization,
  reviews: state.mainReducer.reviews
});

const mapDispatchToProps = {
  setCurItem,
  setAuthorization
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen2View);
