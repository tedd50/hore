import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text, Image } from 'react-native';
import { productAdd, orderAdd } from '../actions';
import { ButtonFooter, ButtonCartLeft, ButtonCartRight, Spinner } from './common';

class Cart extends Component {
  onButtonPress(barangid, amount) {
    // console.log('onButtonPress', barangid, amount);
    this.props.productAdd(this.props.cart, barangid, amount, 0, '');
  }

  onOrderPress() {
    this.props.orderAdd(this.props.cart);
  }

  renderButton() {
    // console.log('Cart renderButton this.props.loading =', this.props.loading);
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <ButtonFooter onPress={this.onOrderPress.bind(this)}>
        ORDER
      </ButtonFooter>
    );
  }

  render() {
    // console.log('Cart render()', this.props);
    const { cart } = this.props;
    let totalPrice = 0;
    if (cart) {
      cart.forEach((item) => {
        totalPrice += item.harga * item.amount;
      });
    }
    if (cart.length === 0) {
      return (
        <View>
          <Text style={styles.emptyTextStyle}>Your Cart is Empty</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.9 }}>
          <FlatList
            data={cart}
            extraData={this.props}
            keyExtractor={item => item.barangid}
            renderItem={({ item }) => (
              <View style={styles.listRowStyle}>
                <View style={styles.picStyle}>
                  <Image style={styles.imageStyle} source={{ uri: item.picture }} />
                </View>
                <View style={styles.descStyle}>
                  <Text style={styles.itemNameStyle}>{item.name}</Text>
                  <Text style={styles.pricePerItemStyle}>Rp{item.harga} / item</Text>
                  <Text style={styles.priceItemStyle}>Rp{item.harga * item.amount}</Text>
                </View>
                <View style={styles.qtyStyle}>
                  <ButtonCartLeft onPress={this.onButtonPress.bind(this, item.barangid, -1)}>
                    -
                  </ButtonCartLeft>
                  <Text style={styles.qtyTextStyle}>{item.amount}</Text>
                  <ButtonCartRight onPress={this.onButtonPress.bind(this, item.barangid, 1)}>
                    +
                  </ButtonCartRight>
                </View>
              </View>
            )}
            ListFooterComponent={
              <View>
                <View style={styles.subtotalCardStyle}>
                  <Text style={styles.subtotalTextStyle}>Subtotal</Text>
                  <Text style={styles.subtotalTextStyle}>Rp{totalPrice}</Text>
                </View>
                <Text style={styles.errorTextStyle}>
                  {this.props.error}
                </Text>
              </View>
            }
          />
        </View>
        <View style={styles.fixedFooterStyle}>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

const styles = {
  fixedFooterStyle: {
    flex: 0.1,
  },
  listRowStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 5,
  },
  imageStyle: {
    width: 45,
    height: 45
  },
  picStyle: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descStyle: {
    width: 160,
    height: 80,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  qtyStyle: {
    flex: 1,
    flexDirection: 'row',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  itemNameStyle: {
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 1,
  },
  pricePerItemStyle: {
    fontSize: 12,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 1,
  },
  priceItemStyle: {
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 1,
  },
  qtyTextStyle: {
    color: 'black',
    fontSize: 16,
  },
  subtotalCardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  subtotalTextStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  emptyTextStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ product }) => {
  const { cart, data, loading, error } = product;

  return { cart, data, loading, error };
};

export default connect(mapStateToProps, { productAdd, orderAdd })(Cart);
