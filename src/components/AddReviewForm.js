import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
    Button,
    Text,
    Form,
    Item,
    Input,
    View,
    Picker
} from 'native-base';

//TODO

export default class AddReviewForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
          text: null,
          picker: 1
      }
  }
    textHandler = val => {
        this.setState({
            text: val
        })
    }

handlerAddReview = () => {
//this.props.addReview(this.state.text);
}

onValueChangePicker = val => {
  this.setState({
    picker: val
  });
}

    getAddReviewForm = () => {
        if (this.props.authorization)//TODO   if (this.props.authorization)
            return (
                <Form>
                    <Input
                        placeholder='Add text'
                        onChangeText={this.textHandler}
                        value={this.state.text}
                        style={styles.input}
                    />
                    <Picker
                    mode='dropdown'
                    selectedValue={this.state.picker}
                    onValueChange={this.onValueChangePicker}
                    style={styles.picker}
                    >
                    <Picker.Item label='1' value='1' />
                    <Picker.Item label='2' value='2' />
                    <Picker.Item label='3' value='3' />
                    <Picker.Item label='4' value='4' />
                    <Picker.Item label='5' value='5' />
                    </Picker>
                    <View style={styles.container}>
                        <Button
                            onPress={this.handlerAddReview}>
                            <Text>Add review</Text>
                        </Button>
                    </View>
                </Form>
            );
  if (!this.props.authorization)
      return (
        <View style={styles.container}>
        <Text style={{ color: 'red', fontSize: 18}}>
            Please login for add your review.
        </Text>
        </View>
            );
    }

    render() {
        return (
            <View>
                {this.getAddReviewForm()}
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
        justifyContent: 'center',
        flexDirection: 'row',
        height: 72,
        borderWidth: 0.5,
        borderColor: 'black'
    },
    input: {
    borderWidth: 1,
    borderColor: 'blue',
    height: 72
  },
  picker: {
  width: 100
}
});
