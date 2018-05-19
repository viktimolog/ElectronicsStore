import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
    Button,
    Container,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon
} from 'native-base';
import Urls from './src/constants/Urls';
import LoginForm from './src/components/LoginForm';
import ProductsList from './src/components/ProductsList';
import ProductDetails from './src/components/ProductDetails';

export default class ElectronicsStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currentProduct: null,
            authorization: false,
            login: null,
            password: null,
            reviews: []
        }
    }

    componentDidMount() {
        this.getData(Urls.products)
            .then(products => this.setState({products}));
    }

    getData = url => {
        return fetch(url)
            .then(response => response.json());
    }

    previousScreen = () => {
        this.setState({
            currentProduct: null,
            reviews: [],
            // products:??? TODO
        });
    }

    selectedProduct = product => {
        this.setState({currentProduct: product});
        this.getData(Urls.reviews + product.id)
            .then(reviews => {
                this.setState({reviews})
            });
    }

    logOut=()=>{
      this.setState({
          authorization: false
      });
    }

    onLoginHandler = (login, password) => {
      login = login.trim();
      password = password.trim();
      if (login === '' || password === '') {
          alert('Fill both fields, please!');
          return;
        }

        this.setState({
//TODO
            authorization: true
        });
    }

    onRegisterHandler = () => {
//TODO
        this.onLoginHandler();
    }

    getButtonBack = () => {
        if (this.state.currentProduct)
            return (
                <Left>
                    <Button
                        transparent
                        onPress={() => this.previousScreen()}
                    >
                        <Icon name='menu'/>
                    </Button>
                </Left>
            );
    }

    render() {
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
                        onLoginHandler={this.onLoginHandler}
                        onRegisterHandler={this.onRegisterHandler}
                        logOut={this.logOut}
                    />
                    <ProductsList
                        authorization={this.state.authorization}
                        selectedProduct={this.selectedProduct}
                        products={this.state.products}
                        currentProduct={this.state.currentProduct}
                    />
                    <ProductDetails
                        authorization={this.state.authorization}
                        previousScreen={this.previousScreen}
                        currentProduct={this.state.currentProduct}
                        reviews={this.state.reviews}
                    />
                </Content>
            </Container>
        );
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
});
