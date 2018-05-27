import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, View, Image, Dimensions } from 'react-native';
import { ButtonCart, ButtonCartZero, ButtonCartLeft, ButtonCartRight } from './common';
import { productFetch, productAdd } from '../actions';

class ProductList extends Component {
  componentWillMount() {
    // console.log('ProductList Props', this.props);
    const { category2id, keyword } = this.props;

    this.props.productFetch({ categoryid: category2id, keyword });
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    // console.log('componentWillReceiveProps', this.props);
  }

  onButtonPress(barangid, amount, price, picture) {
    // console.log('onButtonPress', barangid, amount);
    this.props.productAdd(this.props.cart, barangid, amount, price, picture);
  }

  renderButton(barangid, harga, picture) {
    const { cart } = this.props;
    // console.log('renderButton', barangid, this.props);
    const found = cart.some((item) => {
      return item.barangid === barangid;
    });

    if (found) {
      let idx = -1;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].barangid === barangid) idx = i;
      }
      return (
        <View style={styles.buttonCartContainerStyle}>
          <ButtonCartLeft onPress={this.onButtonPress.bind(this, barangid, -1, harga, picture)}>
            -
          </ButtonCartLeft>
          <ButtonCart>{cart[idx].amount}</ButtonCart>
          <ButtonCartRight onPress={this.onButtonPress.bind(this, barangid, 1, harga, picture)}>
            +
          </ButtonCartRight>
        </View>
      );
    }

    return (
      <View style={styles.buttonContainerStyle}>
        <ButtonCartZero onPress={this.onButtonPress.bind(this, barangid, 1, harga, picture)}>
          Add To Cart
        </ButtonCartZero>
      </View>
    );
  }

  render() {
    // console.log('Render ProductList', this.props);
    return (
      <FlatList
        numColumns={3}
        data={this.props.data}
        extraData={this.props.cart}
        keyExtractor={item => item.barangid}
        renderItem={({ item }) => (
          <View style={styles.listItemStyle}>
            <View style={styles.sectionStyle}>
              <Image
                style={styles.imageStyle}
                source={{ uri: item.picture }}
              />
              <Text style={styles.priceStyle}>
                Rp{item.harga}
              </Text>
              <Text style={styles.nameStyle}>
                {item.barangname}
              </Text>
              {this.renderButton(item.barangid, item.harga, item.picture)}
            </View>
          </View>
        )}
      />
    );
  }
}

const styles = {
  listItemStyle: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    margin: 0.5,
    marginTop: 1,
    marginBottom: 3,
    paddingLeft: 6,
    paddingRight: 6
  },
  sectionStyle: {
    // flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#00f',
  },
  imageStyle: {
    // flex: 1,
    height: (Dimensions.get('window').width / 3) - 13,
    width: (Dimensions.get('window').width / 3) - 13
  },
  priceStyle: {
    color: '#FF4500',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 1,
    paddingBottom: 3
  },
  nameStyle: {
    fontSize: 11,
    paddingTop: 1,
    paddingBottom: 10
  },
  buttonCartContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#E9E9F0',
  },
  buttonContainerStyle: {
    borderTopWidth: 1,
    borderTopColor: '#E9E9F0',
  }
};

const mapStateToProps = ({ product }) => {
  // console.log('mapStateToProps', product);
  const { data, cart, loading } = product;

  return { data, cart, loading };
  // <FlatList
  //   numColumns={3}
  //   data={
  //     [
  //       { key: 'product_uuid01',
  //         name: 'Banana',
  //         image: 'https://teddychung.com/image/banana.jpg',
  //         price: 15000
  //       },
  //       { key: 'product_uuid02',
  //         name: 'Apple',
  //         image: 'https://teddychung.com/image/apple.jpg',
  //         price: 9000
  //       },
  //       { key: 'product_uuid03',
  //         name: 'Avocado',
  //         image: 'https://teddychung.com/image/avocado.jpg',
  //         price: 8000
  //       },
  //       { key: 'product_uuid04',
  //         name: 'Broccoli',
  //         image: 'https://teddychung.com/image/broccoli.jpg',
  //         price: 5000
  //       },
  //       { key: 'product_uuid05',
  //         name: 'Carrot',
  //         image: 'https://teddychung.com/image/carrot.jpg',
  //         price: 2300
  //       },
  //       { key: 'product_uuid06',
  //         name: 'Corn',
  //         image: 'https://teddychung.com/image/corn.jpg',
  //         price: 4900
  //       },
  //       { key: 'product_uuid07',
  //         name: 'Lemon',
  //         image: 'https://teddychung.com/image/lemon.jpg',
  //         price: 17000
  //       },
  //       { key: 'product_uuid08',
  //         name: 'Longan',
  //         image: 'https://teddychung.com/image/longan.jpg',
  //         price: 35000
  //       },
  //       { key: 'product_uuid09',
  //         name: 'Manggo',
  //         image: 'https://teddychung.com/image/manggo.jpg',
  //         price: 5000
  //       },
  //       { key: 'product_uuid10',
  //         name: 'Melon',
  //         image: 'https://teddychung.com/image/melon.jpg',
  //         price: 5000
  //       },
  //       { key: 'product_uuid11',
  //         name: 'Onion',
  //         image: 'https://teddychung.com/image/onion.jpg',
  //         price: 5000
  //       },
  //       { key: 'product_uuid12',
  //         name: 'Potato',
  //         image: 'https://teddychung.com/image/potato.jpg',
  //         price: 5000
  //       },
  //       { key: 'product_uuid13',
  //         name: 'Dragonfruit',
  //         image: 'https://teddychung.com/image/dragonfruit.jpg',
  //         price: 11200
  //       },
  //       { key: 'product_uuid14',
  //         name: 'Snakefruit',
  //         image: 'https://teddychung.com/image/snakefruit.jpg',
  //         price: 1300
  //       }
  //     ]}
  //   renderItem={({ item }) => <ProductListItem product={item} />}
  // />
};

export default connect(mapStateToProps, { productFetch, productAdd })(ProductList);
