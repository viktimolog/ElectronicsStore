import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Text,
  Form,
  Item,
  Input,
  View
} from 'native-base';
import {TextConstants} from '../constants/TextConstants';
import Urls from '../constants/Urls';

export default class Loginform extends Component {
  state = {
    login: '',
    password: ''
  }

//переписать в одну функцию loginTextHandler и passwordTextHandler
  loginTextHandler = val => {
    this.setState({
      login: val
    })
  }

  passwordTextHandler = val => {
    this.setState({
      password: val
    })
  }

  //переписать в одну функцию loginHandler и registerHandler (url)

  loginHandler = () => {
    const user = {
      username: this.state.login,
      password: this.state.password
    }
    this.props.logReg(Urls.log, user);
  }

  registerHandler = () => {
    const user = {
      username: this.state.login,
      password: this.state.password
    }
    this.props.logReg(Urls.reg, user);
  }

  logOutHandler = () => {
    this.setState({
      password: '',
      login: ''
    })
    this.props.logOut()
  }

  getLoginForm = () => {
    if (!this.props.authorization)
      return (
        <Form>
          <Item>
            <Input
              placeholder={TextConstants.LOGIN}
              onChangeText={this.loginTextHandler}
              value={this.state.login}
            />
          </Item>
          <Item last>
            <Input placeholder={TextConstants.PASSWORD}
                   onChangeText={this.passwordTextHandler}
                   value={this.state.password}
            />
          </Item>
          <View style={styles.container}>
            <Button
              onPress={this.loginHandler}>
              <Text>{TextConstants.LOGIN}</Text>
            </Button>
            <Button
              onPress={this.registerHandler}>
              <Text>{TextConstants.REG}</Text>
            </Button>
          </View>
        </Form>
      )

    if (this.props.authorization)
      return (
        <View style={styles.container}>
          <Text style={{color: 'red', fontSize: 18}}>
            {`Logged as ${this.props.userName}`}
          </Text>
          <Button
            onPress={this.logOutHandler}>
            <Text>{TextConstants.LOGOUT}</Text>
          </Button>
        </View>
      )
  }

  render () {
    return (
      <View>
        {this.getLoginForm()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 72,
    borderWidth: 0.5,
    borderColor: 'lightgray'
  }
})
