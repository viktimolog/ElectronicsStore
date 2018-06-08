import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import {
  setCurItem,
  getItems,
  incrementAction,
  decrementAction,
  setAuthorization,
  logReg
 } from '../actions/actionCreator'

import ItemsList from './ItemsList'
import {TextConstants} from '../constants/TextConstants'
import LoginForm from './LoginForm'
import {
    Button,
    Container,
    Body,
    Content,
    Header,
    Title,
    Left,
    Text
} from 'native-base';

class Screen1View extends Component {
  static navigationOptions = {
    title: TextConstants.TITLESCREEN1
  };

  componentDidMount() {
    this.props.getItems();
  }

  navigate = () => {
    const navigateToScreen2 = NavigationActions.navigate({
      routeName: 'screen2',
      params: { name: "Shubhnik" }
    });
    this.props.navigation.dispatch(navigateToScreen2);
  };

  render() {
    // alert('render Screen1')
    const {
      setCurItem,
      items,
      counterCount,
      incrementAction,
      decrementAction,
      getItems
    } = this.props;
    return (
      <Container>
      <Content>
      <LoginForm
      authorization = {this.props.authorization}
      logReg = {this.props.logReg}      
      userName={this.props.userName}

      />
        <ItemsList
          items={this.props.items}
          navigate={this.navigate}
          setCurItem={this.props.setCurItem}
        />
        <Text>Items[0] = {items.length}</Text>
        <Text>Counter = {counterCount}</Text>
        <View style={{ height: 100, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => incrementAction()}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "600" }}
            >
              INCREMENT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => decrementAction()}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "600" }}
            >
              DECREMENT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => getItems()}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "600" }}
            >
              GET_ITEMS
            </Text>
          </TouchableOpacity>
        </View>
        </Content>
        </Container>
    )
  }
}

const mapStateToProps = state => ({
  counterCount: state.mainReducer.counter,
  items: state.mainReducer.items,
  authorization: state.mainReducer.authorization,
  getData: state.mainReducer.getData,
  userName: state.mainReducer.userName
});

//setCurItem - те что передает дальше просто - тоже обязательно здесь
const mapDispatchToProps = {
  incrementAction,
  decrementAction,
  getItems,
  setCurItem,
  setAuthorization,
  logReg
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen1View);
