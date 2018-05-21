import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Product from './Product';

export default class ProductsList extends Component {
  render () {
    if (!this.props.currentProduct)
      return (
        <ScrollView>
          {
            this.props.products.map(product =>
              <Product
                product={product}
                key={product.id}
                selectedProduct={this.props.selectedProduct}
              />
            )
          }
        </ScrollView>
      )
    return null;
  }
}
