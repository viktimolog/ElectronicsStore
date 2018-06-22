import React from 'react';
import PropTypes from 'prop-types'
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

const ItemDetails = ({item, reviews, authorization, token, addReview}) => (
      <View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Image
              source={{
                uri: Urls.images + item.img
              }}
              style={{ width: 250, height: 220 }} />
          </View>
        <View style={{ paddingTop: 10 }}>
            <Text style={styles.text}>
              {`Description: ${item.text}`}
            </Text>
          </View>
        </View>
         <AddReviewForm
            authorization={authorization}
            item={item}
            token={token}
            addReview={addReview}
          />
      <ScrollView>
            {
              reviews
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

export default ItemDetails

ItemDetails.propTypes = {
item: PropTypes.object.isRequired,
reviews: PropTypes.array.isRequired,
authorization: PropTypes.bool.isRequired,
token: PropTypes.string.isRequired,
addReview: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
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
