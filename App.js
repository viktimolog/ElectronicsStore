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
            reviews: [],
            token: null
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

    logOut = () => {
      this.setState({
          authorization: false
      });
    }

  onLoginHandler = (username, password) => {
      username = username.trim();
      password = password.trim();
      if (username === '' || password === '') {
          alert('Fill both fields, please!');
          return;
        }
        fetch(Urls.log, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(responseObj => {
          if(responseObj.success)
          this.setState({
          authorization: responseObj.success
        })
        else alert(responseObj.message);
      }
      )
    }

    onRegisterHandler = (username, password) => {
      username = username.trim();
      password = password.trim();
      if (username === '' || password === '') {
          alert('Fill both fields, please!');
          return;
        }
        fetch(Urls.reg, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(responseObj => {
          if(responseObj.success)
          this.setState({
          authorization: responseObj.success
        })
        else alert(responseObj.message);
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
                        product={this.state.currentProduct}
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
