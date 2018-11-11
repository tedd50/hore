/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableNativeFeedback
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Bg } from './common';

class Home extends Component {
  onBrowseProductButtonPress() {
    Actions.category();
  }

  onSearchButtonPress() {
    Actions.search();
  }

  render() {
    return (
      <Bg>
        <TouchableWithoutFeedback onPress={this.onSearchButtonPress.bind(this)}>
          <View style={styles.searchStyle}>
            <Image
              style={styles.imageStyle}
              source={require('../image/search.png')}
            />
            <Text style={styles.textStyle}>
              Search for bread, milk, egg...
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableNativeFeedback
          useForeground
          onPress={this.onBrowseProductButtonPress.bind(this)}
        >
          <View style={styles.containerStyle}>
            <ImageBackground
              style={styles.backgroundStyle}
              imageStyle={{ borderRadius: 4 }}
              source={require('../image/categories.png')}
              resizeMode='stretch'
            >
              <View style={styles.textContainerStyle}>
                <Text style={styles.textTitleStyle}>
                  Categories
                </Text>
                <Text style={styles.textBodyStyle}>
                  Explore our wide assortment of products
                </Text>
                <Text style={styles.textBrowseStyle}>
                  Browse Now
                </Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableNativeFeedback>
      </Bg>
    );
  }
}

const styles = {
  textContainerStyle: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  containerStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  backgroundStyle: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  searchStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  imageStyle: {
    height: 24,
    width: 24,
    margin: 10,
  },
  textStyle: {
    fontSize: 16,
    opacity: 0.5,
  },
  textTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textBodyStyle: {
    fontSize: 12,
    height: 64,
  },
  textBrowseStyle: {
    color: '#32CD32',
  },
  imageCategoryStyle: {
    height: 128,
    width: 155,
  },
};

export default Home;
