import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Review extends Component {

    handleAddReview = () => {
        // this.props.selectedProduct(this.props.product);
    }

    render() {
      const rate = `Rate: ${this.props.review.rate}`;

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{this.props.review.created_by.username}</Text>
                    <Text style={styles.text}>{this.props.review.text}</Text>
                </View>
                <View style={styles.textRight}>
                    <Text style={styles.text}>{this.props.review.created_at}</Text>
                    <Text style={styles.text}>{rate}</Text>
                </View>
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
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    text: {
        fontSize: 16,
        color: 'black'
    },
    textRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    }
});
