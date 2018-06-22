import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Urls from '../constants/Urls';

const Item = ({navigate, item, setCurItem}) => {
  const handleSelectedItem = () => {
    setCurItem(item);
    navigate();
  }
    return (
      <TouchableOpacity onPress={handleSelectedItem}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>{item.title}</Text>
            <Image
              source={{ uri: Urls.images + item.img }}
              style={{ width: 100, height: 85 }} />
          </View>
          <View style={{ paddingLeft: 50 }}>
            <Text style={styles.text}>Description: </Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

export default Item

Item.propTypes = {
navigate: PropTypes.func.isRequired,
item: PropTypes.object.isRequired,
setCurItem: PropTypes.func.isRequired
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
