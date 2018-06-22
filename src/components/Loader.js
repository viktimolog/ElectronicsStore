import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text
} from 'react-native'
import {TextConstants} from '../constants/TextConstants'

const Loader = () => (
  <View style={{flex: 1}}>
  <Text style={styles.containerText}>{TextConstants.TEXTLOADER}</Text>
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size='large' color='#0000ff'/>
  </View>
  </View>
)
export default Loader

const styles = StyleSheet.create({
  containerText: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
  },
  container: {
    position: 'absolute',
    top: '50%',
    alignSelf: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
