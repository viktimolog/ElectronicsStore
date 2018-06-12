import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, BackHandler } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
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

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
}

  onBackPress = () => {
    const navigateToScreen1 = NavigationActions.navigate({
      routeName: 'screen1'
    })
    this.props.navigation.dispatch(navigateToScreen1);
    return true;
  }

getContent=()=>(
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

  render() {
    return (
      <Container>
      {this.props.getData
        ? <Loader/>
        : this.getContent()}
      </Container>
    )
  }
}

Screen2View.propTypes = {
addReview: PropTypes.func.isRequired,
logOut: PropTypes.func.isRequired,
logReg: PropTypes.func.isRequired,
setAuthorization: PropTypes.func,
setCurItem: PropTypes.func.isRequired,
curItem: PropTypes.object.isRequired,
authorization: PropTypes.bool.isRequired,
reviews: PropTypes.array.isRequired,
getData: PropTypes.bool.isRequired,
userName: PropTypes.string.isRequired,
token: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  curItem: state.mainReducer.curItem,
  authorization: state.mainReducer.authorization,
  reviews: state.mainReducer.reviews,
  getData: state.mainReducer.getData,
  userName: state.mainReducer.userName,
  token: state.mainReducer.token
})

const mapDispatchToProps = {
  setCurItem,
  setAuthorization,
  logReg,
  logOut,
  addReview
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen2View);
