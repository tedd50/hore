/* eslint-disable global-require */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text, Image, TouchableNativeFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { categoryFetch } from '../actions';
import { Bg } from './common';

class Category extends Component {
  componentWillMount() {
    this.props.categoryFetch();
    // console.log('ComponentWillMount', this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  onAllButtonPress() {
    Actions.productList({ category2id: '', keyword: '' });
  }

  onCategoryPress(category2id) {
    Actions.productList({ category2id, keyword: '' });
  }

  render() {
    return (
      <Bg>
        <FlatList
          numColumns={2}
          data={this.props.data}
          keyExtractor={item => item.category2id}
          renderItem={({ item }) => (
            <TouchableNativeFeedback
              useForeground
              onPress={() => this.onCategoryPress(item.category2id)}
            >
              <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>
                  {item.category2name}
                </Text>
                <Image
                  style={styles.imageStyle}
                  source={require('../image/fresh.png')}
                />
              </View>
            </TouchableNativeFeedback>
          )}
        />
      </Bg>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    margin: 3,
    backgroundColor: 'white',
  },
  imageStyle: {
    height: 64,
    width: 32
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
  },
};

const mapStateToProps = ({ category }) => {
  const { data } = category;

  return { data };
};

export default connect(mapStateToProps, { categoryFetch })(Category);
