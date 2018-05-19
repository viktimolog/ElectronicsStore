import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Product from './Product';
import Review from './Review';

export default class ProductDetails extends Component {

    handleSelectedProduct = () => {
        this.props.selectedProduct(this.props.product);
    }

    getProduct = () => {
        if (this.props.currentProduct)
            return (
                <View>
                    <Product
                        product={this.props.currentProduct}
                        key={this.props.currentProduct.id}
                    />
                    <ScrollView>
                        {
                            this.props.reviews.map(review =>
                                <Review
                                    review={review}
                                    key={review.id}
                                />
                            )
                        }
                    </ScrollView>
                </View>
            );
    }

    render() {
        return (
            <View>
                {this.getProduct()}
            </View>
        );
    }
}
