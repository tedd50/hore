import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { keywordChanged } from '../actions';
import { Card, CardSection } from './common';

class Search extends Component {
  onKeywordChange(text) {
    this.props.keywordChanged(text);
  }

  onSubmitSearch() {
    const { keyword } = this.props;

    Actions.productList({ category2id: '', keyword });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            autoFocus
            placeholder='Search products'
            autoCorrect={false}
            style={styles.inputStyle}
            onChangeText={this.onKeywordChange.bind(this)}
            onSubmitEditing={this.onSubmitSearch.bind(this)}
            value={this.props.keyword}
          />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
};

const mapStateToProps = ({ product }) => {
  const { keyword } = product;

  return { keyword };
};

export default connect(mapStateToProps, { keywordChanged })(Search);
