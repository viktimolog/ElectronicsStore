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
import {login, reg} from '../constants';

export default class Loginform extends Component {
  constructor(props) {
      super(props);
      this.state = {
          login: null,
          password: null
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

    getLoginForm = () => {
        if (!this.props.authorization)
            return (
                <Form>
                    <Item>
                        <Input
                            placeholder='Login'
                            onChangeText={this.loginTextHandler}
                            value={this.props.login}
                        />
                    </Item>
                    <Item last>
                        <Input placeholder='Password'
                               onChangeText={this.passwordTextHandler}
                               value={this.props.password}
                        />
                    </Item>
                    <View style={styles.container}>
                        <Button
                            onPress={this.onLoginHandler}>
                            <Text>{login}</Text>
                        </Button>
                        <Button
                            onPress={this.onRegisterHandler}>
                            <Text>{reg}</Text>
                        </Button>
                    </View>
                </Form>
            );

        if (this.state.authorization)
            return (
                <Text>{`Logged as ${this.state.login}`}</Text>
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
