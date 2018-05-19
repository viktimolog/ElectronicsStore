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

export default class AddReviewForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
          text: null
      }
  }
    textHandler = val => {
        this.setState({
            text: val
        })
    }

handlerAddReview =() => {
//this.props.addReview(this.state.text);
}

    getLoginForm = () => {
        if (!this.props.authorization)
            return (
                <Form>
                    <Item>
                        <Input
                            placeholder='Add text'
                            onChangeText={this.textHandler}
                            value={this.state.text}
                        />
                    </Item>
                    <View style={styles.container}>
                        <Button
                            onPress={this.handlerAddReview}>
                            <Text>Add review</Text>
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
