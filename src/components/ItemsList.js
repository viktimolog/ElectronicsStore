import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Item from './Item';

export default class ItemsList extends Component {
  render () {
      return (
        <ScrollView>
          {
            this.props.items.map(item =>
              <Item
                item={item}
                key={item.id}
                navigate = {this.props.navigate}
                setCurItem = {this.props.setCurItem}
                // selectedProduct={this.props.selectedProduct}
              />
            )
          }
        </ScrollView>
      )
  }
}
