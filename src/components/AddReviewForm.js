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
          text: '',
          picker: 0
      }
  }

  componentWillReceiveProps(){
    this.setState({
        text: '',
        picker: '0'
    })
  }

    textHandler = val => {
        this.setState({
            text: val
        })
    }

addReviewHandler = () => {
if(this.state.picker === '0'){
  alert('Select rate, please!');
  return;
}
this.props.addReview(this.props.id, this.state.picker, this.state.text);
}

onValueChangePicker = val => {
  this.setState({
    picker: val
  });
}

    getAddReviewForm = () => {
        if (this.props.authorization)
            return (
                <Form>
                    <Input
                        placeholder='Add product review'
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
                    <Picker.Item label='rate: 0' value='0' />
                    <Picker.Item label='rate: 1' value='1' />
                    <Picker.Item label='rate: 2' value='2' />
                    <Picker.Item label='rate: 3' value='3' />
                    <Picker.Item label='rate: 4' value='4' />
                    <Picker.Item label='rate: 5' value='5' />
                    </Picker>
                    <View style={styles.container}>
                        <Button
                            onPress={this.addReviewHandler}>
                            <Text>Add review</Text>
                        </Button>
                    </View>
                </Form>
            );
  if (!this.props.authorization)
      return (
        <View style={styles.container}>
        <Text style={{color: 'red', fontSize: 18}}>
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
  width: 85
}
});
