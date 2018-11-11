import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, FlatList } from 'react-native';
import { orderDetailFetch } from '../actions';

class OrderDetail extends Component {
  componentWillMount() {
    const { orderheaderid } = this.props;

    this.props.orderDetailFetch({ orderheaderid });
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  render() {
    const { data } = this.props;
    let orderdate = '';
    let status = '';
    let duedate = '';
    let totalPrice = 0;
    if (data) {
      orderdate = data[0].orderdate;
      status = data[0].status;
      duedate = data[0].duedate;
      data.forEach((item) => {
        totalPrice += item.price * item.amount;
      });
    }

    return (
      <FlatList
        data={this.props.data}
        keyExtractor={item => item.barangid}
        ListHeaderComponent={
          <View>
            <View style={styles.labelContainerStyle}>
              <Text style={styles.labelStyle}>Order Info</Text>
            </View>
            <View style={styles.cardContainerStyle}>
              <Text style={styles.cardSubjectStyle}>Order Date</Text>
              <Text style={styles.cardDetailStyle}>{orderdate}</Text>
            </View>
            <View style={styles.cardContainerStyle}>
              <Text style={styles.cardSubjectStyle}>Status</Text>
              <Text style={styles.cardDetailStyle}>{status}</Text>
            </View>
            <View style={styles.cardContainerStyle}>
              <Text style={styles.cardSubjectStyle}>Due Date</Text>
              <Text style={styles.cardDetailStyle}>{duedate}</Text>
            </View>
            <View style={styles.labelContainerStyle}>
              <Text style={styles.labelStyle}>Items</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.listRowStyle}>
            <View style={styles.picStyle}>
              <Image style={styles.imageStyle} source={{ uri: item.picture }} />
            </View>
            <View style={styles.descStyle}>
              <Text style={styles.itemNameStyle}>{item.barangname}</Text>
              <Text style={styles.pricePerItemStyle}>
                Rp{item.price.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')} / item
              </Text>
              <Text style={styles.priceItemStyle}>
                Rp{(item.price * item.amount).toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}
              </Text>
            </View>
            <View style={styles.qtyStyle}>
              <Text style={styles.qtyTextStyle}>{item.amount}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={
          <View style={styles.subtotalCardStyle}>
            <Text style={styles.subtotalTextStyle}>Subtotal</Text>
            <Text style={styles.subtotalTextStyle}>
              Rp{totalPrice.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}
            </Text>
          </View>
        }
      />
    );
  }
}

const styles = {
  labelContainerStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9F0',
  },
  labelStyle: {
    color: 'limegreen',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardContainerStyle: {
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9F0',
  },
  cardSubjectStyle: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardDetailStyle: {
    fontSize: 14,
    paddingTop: 2,
    paddingBottom: 2,
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
};

const mapStateToProps = ({ orderDetail }) => {
  const { data } = orderDetail;

  return { data };
};

export default connect(mapStateToProps, { orderDetailFetch })(OrderDetail);
