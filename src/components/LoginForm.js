import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
    Button,
    Text,
    Form,
    Item,
    Input,
    View
} from 'native-base';
import {login, reg, logout} from '../constants';

export default class Loginform extends Component {
  constructor(props) {
      super(props);
      this.state = {
          login: '',
          password: ''
      }
  }

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

    loginHandler = () => {
      this.props.onLoginHandler(this.state.login, this.state.password);
    }

    registerHandler = () => {
      this.props.onRegisterHandler(this.state.login, this.state.password);
    }

    logOuthandler = () => {
      this.setState({
          password: '',
          login: ''
      })
        this.props.logOut();
    }

    getLoginForm = () => {
        if (!this.props.authorization)
            return (
                <Form>
                    <Item>
                        <Input
                            placeholder='Login'
                            onChangeText={this.loginTextHandler}
                            value={this.state.login}
                        />
                    </Item>
                    <Item last>
                        <Input placeholder='Password'
                               onChangeText={this.passwordTextHandler}
                               value={this.state.password}
                        />
                    </Item>
                    <View style={styles.container}>
                        <Button
                            onPress={this.loginHandler}>
                            <Text>{login}</Text>
                        </Button>
                        <Button
                            onPress={this.registerHandler}>
                            <Text>{reg}</Text>
                        </Button>
                    </View>
                </Form>
            );

        if (this.props.authorization)
            return (
              <View style={styles.container}>
                <Text style={{ color: 'red', fontSize: 18}}>
                    {`Logged as ${this.state.login}`}
                </Text>
                <Button
                    onPress={this.logOuthandler}>
                    <Text>{logout}</Text>
                </Button>
              </View>
            );
    }

    render() {
        return (
            <View>
                {this.getLoginForm()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textTitle: {
        alignSelf: 'center'
    },
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
    },
});
