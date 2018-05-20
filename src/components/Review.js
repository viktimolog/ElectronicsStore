import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Review extends Component {
    render() {
      const dateFormat = require('dateformat');
      const userName = `${this.props.review.created_by.username} at ${dateFormat(this.props.review.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`;
      const rate = `Rate: ${this.props.review.rate}`;
      const comment = `Comment: ${this.props.review.text}`;

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{userName}</Text>
                    <Text style={styles.text}>{rate}</Text>
                    <Text style={styles.text}>{comment}</Text>
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
    }
});
