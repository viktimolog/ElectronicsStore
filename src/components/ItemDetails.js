import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView
} from 'react-native';
import AddReviewForm from './AddReviewForm';
import Review from './Review';
import Urls from '../constants/Urls';

export default class ItemDetails extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Text style={styles.text}>{this.props.item.title}</Text>
            <Image
              source={{
                uri: Urls.images + this.props.item.img
              }}
              style={{ width: 250, height: 220 }} />
          </View>
          <View style={{ paddingTop: 130 }}>
            <Text style={styles.text}>
              {`Description: ${this.props.item.text}`}
            </Text>
          </View>
        </View>
         <AddReviewForm
            authorization={this.props.authorization}
            addReview={this.props.addReview}
            id={this.props.item.id}
          />
      <ScrollView>
            {
              this.props.reviews
                .sort((a, b) => b.id - a.id)
                .map(review =>
                  <Review
                    review={review}
                    key={review.id}
                  />
                )
            }
          </ScrollView>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 130,
    paddingBottom: 10,
    borderBottomWidth: 1
  },
  text: {
    fontSize: 16,
    color: 'black'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
