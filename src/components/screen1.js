import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

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
} from 'native-base'

class Screen1View extends Component {
  static navigationOptions = {
    title: TextConstants.TITLESCREEN1
  }

  componentDidMount() {
    this.props.getItems();
  }

  navigate = () => {
    const navigateToScreen2 = NavigationActions.navigate({
      routeName: 'screen2'
    })
    this.props.navigation.dispatch(navigateToScreen2);
  }

  getContent = () => (
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

Screen1View.propTypes = {
authorization: PropTypes.bool.isRequired,
navigation: PropTypes.object.isRequired,
getItems: PropTypes.func.isRequired,
logReg: PropTypes.func.isRequired,
userName: PropTypes.string.isRequired,
logOut: PropTypes.func.isRequired,
items: PropTypes.array.isRequired,
setCurItem: PropTypes.func.isRequired,
getData: PropTypes.bool.isRequired,
setAuthorization: PropTypes.func
}

const mapStateToProps = state => ({
  items: state.mainReducer.items,
  authorization: state.mainReducer.authorization,
  getData: state.mainReducer.getData,
  userName: state.mainReducer.userName
})

const mapDispatchToProps = {
  getItems,
  setCurItem,
  setAuthorization,
  logReg,
  logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1View);
