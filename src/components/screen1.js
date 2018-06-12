import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import {
  setCurItem,
  getItems,
  setAuthorization,
  logReg,
  logOut
 } from '../actions/actionCreator'

import {TextConstants} from '../constants/TextConstants'
import ItemsList from './ItemsList'
import Loader from './Loader'
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

  getContent = () => {
  if(this.props.getData)
  return <Loader/>
  return(
  <Content>
  <LoginForm
    authorization = {this.props.authorization}
    logReg = {this.props.logReg}
    userName={this.props.userName}
    logOut = {this.props.logOut}
  />
  <ItemsList
    items={this.props.items}
    navigate={this.navigate}
    setCurItem={this.props.setCurItem}
  />
  </Content>
  )
}

render() {
return (
    <Container>
      {this.getContent()}
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
  getItems,
  setCurItem,
  setAuthorization,
  logReg,
  logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen1View);
