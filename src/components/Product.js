import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class Product extends Component {

    handleSelectedProduct = () => {
        this.props.selectedProduct(this.props.product);
    }

    render() {
        const uriImg = 'http://smktesting.herokuapp.com/static/' + this.props.product.img;

        return (
            <TouchableOpacity onPress={this.handleSelectedProduct}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.text}>{this.props.product.title}</Text>
                        <Image
                            source={{
                                uri: uriImg
                            }}
                            style={{width: 72, height: 72}}/>
                    </View>
                    <View style={{paddingLeft: 50}}>
                        <Text style={styles.text}>Description: </Text>
                        <Text style={styles.text}>{this.props.product.text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
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
