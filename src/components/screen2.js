import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import ItemDetails from './ItemDetails'
import {TextConstants} from '../constants/TextConstants'
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
import {
  setCurItem,
  getItems,
  setAuthorization,
  logReg,
  logOut,
  addReview
 } from '../actions/actionCreator'
import LoginForm from './LoginForm'
import Loader from './Loader'

class Screen2View extends Component {
  static navigationOptions = {
    title: TextConstants.TITLESCREEN2
  };

getContent=()=>{
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
      <ItemDetails
      item={this.props.curItem}
      authorization={this.props.authorization}
      reviews = {this.props.reviews}
      token={this.props.token}
      addReview={this.props.addReview}
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
  curItem: state.mainReducer.curItem,
  authorization: state.mainReducer.authorization,
  reviews: state.mainReducer.reviews,
  getData: state.mainReducer.getData,
  userName: state.mainReducer.userName,
  token: state.mainReducer.token
});

const mapDispatchToProps = {
  setCurItem,
  setAuthorization,
  setAuthorization,
  logReg,
  logOut,
  addReview
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen2View);
