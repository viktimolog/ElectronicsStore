import React, {Component} from 'react';
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

export default class ProductDetails extends Component {
    getProduct = () => {
        if (this.props.product)
            return (
                <View>
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Text style={styles.text}>{this.props.product.title}</Text>
                            <Image
                                source={{
                                    uri: Urls.images + this.props.product.img
                                }}
                                style={{width: 216, height: 216}}/>
                        </View>
                        <View>
                            <Text style={styles.text}>
                                {`Description: ${this.props.product.text}`}
                            </Text>
                        </View>
                    </View>
                    <AddReviewForm
                        authorization={this.props.authorization}
                        addReview={this.props.addReview}
                        id={this.props.product.id}
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
});
