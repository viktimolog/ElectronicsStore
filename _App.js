import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Button,
    Container,
    Body,
    Content,
    Header,
    Title,
    Left,
    Text
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Urls from './src/constants/Urls';
import LoginForm from './src/components/LoginForm';
import ProductsList from './src/components/ProductsList';
import ProductDetails from './src/components/ProductDetails';
import Loader from './src/components/Loader';

export default class ElectronicsStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currentProduct: null,
            authorization: false,
            reviews: [],
            token: null,
            getData: true,
            userName: ''
        }
    }

    componentDidMount() {
        this.getData(Urls.products)
            .then(products => this.setState({
                products,
                getData: false
            }));
    }

    getData = url => {
        return fetch(url)
            .then(response => response.json());
    }

    previousScreen = () => {
        this.setState({
            currentProduct: null,
            getData: true
        });
        this.getData(Urls.products)
            .then(products => this.setState({
                products,
                getData: false
            }));
    }

    selectedProduct = product => {
        this.setState({currentProduct: product});
        this.getData(Urls.reviews + product.id)
            .then(reviews => {
                this.setState({reviews})
            });
    }

    logOut = () => {
        this.setState({
            authorization: false,
            userName: ''
        });
    }

    addReview = (id, rate, text) => {
        text = text.trim();
        if (text === '') {
            alert('Fill the text field, please!');
            return;
        }
        this.setState({getData: true});
        fetch(Urls.reviews + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.state.token
            },
            body: JSON.stringify({rate, text})
        })
            .then(response => response.json())
            .then(responseObj => {
                    //the server do not return review_id as written in the task
                    if (responseObj.success) {
                        alert('Congratulation, your review was added!');
                        this.getData(Urls.reviews + this.state.currentProduct.id)
                            .then(reviews => {
                                this.setState({
                                    reviews,
                                    getData: false
                                })
                            });
                    }
                    else{
                        alert('Sorry, the server has returned the error, your review was not added!');
                        this.setState({getData: false});
                    }
                }
            )
    }

    logReg = (url, username, password) => {
        username = username.trim();
        password = password.trim();
        if (username === '' || password === '') {
            alert('Fill both fields, please!');
            return;
        }
        this.setState({getData: true});
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })
            .then(response => response.json())
            .then(responseObj => {
                    if (responseObj.success) {
                        this.setState({
                            authorization: responseObj.success,
                            token: responseObj.token,
                            getData: false,
                            userName: username
                        })
                    }
                    else{
                        alert(responseObj.message);
                        this.setState({getData: false});
                    }
                }
            )
    }

    getButtonBack = () => {
        if (this.state.currentProduct)
            return (
                <Left>
                    <Button
                        transparent
                        onPress={() => this.previousScreen()}
                    >
                        <Icon
                            name='angle-left'
                            size={40}
                            color='red'
                        />
                    </Button>
                </Left>
            )
    }

    render() {
        if (this.state.getData)
            return (
                <Container>
                    <Header>
                        <Body>
                        <Text
                            style={styles.textLoader}
                        >
                            Please wait while data is loading
                        </Text>
                        </Body>
                    </Header>
                    <Loader/>
                </Container>
            )
        return (
            <Container>
                <Header>
                    {this.getButtonBack()}
                    <Body>
                    <Title style={styles.textTitle}>Electronics Store</Title>
                    </Body>
                </Header>
                <Content>
                    <LoginForm
                        authorization={this.state.authorization}
                        userName={this.state.userName}
                        logOut={this.logOut}
                        logReg={this.logReg}
                    />
                    <ProductsList
                        authorization={this.state.authorization}
                        selectedProduct={this.selectedProduct}
                        products={this.state.products}
                        currentProduct={this.state.currentProduct}
                    />
                    <ProductDetails
                        authorization={this.state.authorization}
                        product={this.state.currentProduct}
                        reviews={this.state.reviews}
                        addReview={this.addReview}
                    />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    textTitle: {
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 72,
        borderWidth: 0.5,
        borderColor: 'lightgray'
    },
    textLoader: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18
    }
});