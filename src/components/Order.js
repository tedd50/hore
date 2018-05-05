import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, TouchableHighlight, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { orderFetch, orderDetail } from '../actions';

class Order extends Component {
  componentWillMount() {
    this.props.orderFetch();
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  onOrderPress(orderheaderid) {
    Actions.orderDetail({ orderheaderid });
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={item => item.orderheaderid}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => this.onOrderPress(item.orderheaderid)}>
            <View style={styles.containerStyle}>
              <Text style={styles.dateStyle}>{item.orderdate}</Text>
              <Text style={styles.statusStyle}>{item.status}</Text>
              <Text style={styles.dueStyle}>Due date: {item.duedate}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    );
  }
}

const styles = {
  containerStyle: {
    borderTopWidth: 1,
    borderTopColor: '#E9E9F0',
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9F0',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15
  },
  dateStyle: {
    fontSize: 18,
    color: 'black',
    paddingTop: 1,
    paddingBottom: 1
  },
  statusStyle: {
    fontSize: 15,
    paddingTop: 1,
    paddingBottom: 1
  },
  dueStyle: {
    fontSize: 15,
    color: 'cadetblue',
    paddingTop: 1,
    paddingBottom: 1
  }
};

const mapStateToProps = ({ order }) => {
  const { data } = order;

  return { data };
};

export default connect(mapStateToProps, { orderFetch, orderDetail })(Order);
