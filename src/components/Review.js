import React from 'react';
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Review =({review})=>{
    const dateFormat = require('dateformat')
    const userName = `${review.created_by.username} at ${dateFormat(review.created_at,
      'dddd, mmmm dS, yyyy, h:MM:ss TT')}`
    const rate = `Rate: ${review.rate}`
    const comment = `Comment: ${review.text}`

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{userName}</Text>
          <Text style={styles.text}>{rate}</Text>
          <Text style={styles.text}>{comment}</Text>
        </View>
      </View>
    )
  }

export default Review

Review.propTypes = {
review: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  text: {
    fontSize: 16,
    color: 'black'
  }
})
