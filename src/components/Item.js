import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Urls from '../constants/Urls';

export default class Item extends Component {
  handleSelectedItem = () => {
    this.props.setCurItem(this.props.item);
    //большой вопрос, скорее надо из одного редусера вызывать функцию другого или хз    
    this.props.navigate();
  }

  render() {
    const uriImg = Urls.images + this.props.item.img;

    return (
      <TouchableOpacity onPress={this.handleSelectedItem}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>{this.props.item.title}</Text>
            <Image
              source={{ uri: uriImg }}
              style={{ width: 100, height: 85 }} />
          </View>
          <View style={{ paddingLeft: 50 }}>
            <Text style={styles.text}>Description: </Text>
            <Text style={styles.text}>{this.props.item.text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    color: 'black'
  }
})
