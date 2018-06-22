import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import {
  Button,
  Text,
  Form,
  Item,
  Input,
  View
} from 'native-base';
import StarRating from 'react-native-star-rating';
import {TextConstants} from '../constants/TextConstants'

export default class AddReviewForm extends Component {
  state = {
    text: '',
    starCount: 0
  }

  componentWillReceiveProps () {
    this.setState({
      text: '',
      starCount: 0
    })
  }

 onStarRatingPress = rating => {
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
    if (this.state.text.trim() === '') {
        alert(TextConstants.FILLFIELDS)
        return
    }
    if (this.state.starCount === 0) {
      alert(TextConstants.SELECTRATE)
      return
    }
    this.props.addReview(
      this.props.item,
      this.state.starCount,
      this.state.text,
      this.props.token
      )
  }

  getAddReviewForm = () => (
      <Form>
        <Input
          placeholder={TextConstants.PLACEHOLDERADDREVIEW}
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
            <Text>{TextConstants.BTNADDREVIEW}</Text>
          </Button>
        </View>
      </Form>
    )

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

AddReviewForm.propTypes = {
authorization: PropTypes.bool.isRequired,
addReview: PropTypes.func.isRequired,
item: PropTypes.object.isRequired,
token: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  textTitle: {
    alignSelf: 'center'
  },
  container: {
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
