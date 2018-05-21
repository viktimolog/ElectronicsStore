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
import StarRating from 'react-native-star-rating';

export default class AddReviewForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      starCount: 0
    }
  }

  componentWillReceiveProps () {
    this.setState({
      text: '',
      starCount: 0
    })
  }

  onStarRatingPress (rating) {
    this.setState({
      starCount: rating
    })
  }

  textHandler = val => {
    this.setState({
      text: val
    })
  }

  addReviewHandler = () => {
    if (this.state.starCount === 0) {
      alert('Select rate, please!')
      return
    }
    this.props.addReview(
      this.props.id,
      this.state.starCount,
      this.state.text)
  }

  getAddReviewForm = () => {
    return (
      <Form>
        <Input
          placeholder='Add product review'
          onChangeText={this.textHandler}
          value={this.state.text}
          style={styles.input}
        />
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          fullStarColor={'red'}
        />
        <View style={styles.container}>
          <Button
            onPress={this.addReviewHandler}>
            <Text>Add review</Text>
          </Button>
        </View>
      </Form>
    )
  }

  render () {
    const loginFalse = (
      <View style={styles.container}>
        <Text style={{color: 'red', fontSize: 18}}>
          Please log in to add a review.
        </Text>
      </View>
    )
    return (
      <View>
        {this.props.authorization
          ? this.getAddReviewForm()
          : loginFalse}
      </View>
    )
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
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'blue',
    height: 72
  }
})
