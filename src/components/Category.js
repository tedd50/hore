import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { categoryFetch } from '../actions';
import { Card, CardSection, Button } from './common';

class Category extends Component {
  componentWillMount() {
    this.props.categoryFetch();
    // console.log('ComponentWillMount', this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  // onSearchButtonPress() {
  //   Actions.search();
  // }

  onAllButtonPress() {
    Actions.productList();
  }

  onCategoryPress(category2id) {
    Actions.productList({ category2id });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={this.onAllButtonPress.bind(this)}> All </Button>
        </CardSection>
        <FlatList
          data={this.props.data}
          keyExtractor={item => item.category2id}
          renderItem={({ item }) => (
            <CardSection>
              <Button onPress={() => this.onCategoryPress(item.category2id)}>
                {item.category2name}
              </Button>
            </CardSection>
          )}
        />
      </Card>
    );
  }
}

const mapStateToProps = ({ category }) => {
  const { data } = category;

  return { data };
};

export default connect(mapStateToProps, { categoryFetch })(Category);
