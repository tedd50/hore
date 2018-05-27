/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Image } from 'react-native';

class TabIcon extends Component {
  render() {
    let image;
    const { tabBarLabel, focused } = this.props;
    console.log('TabIcon', this.props);
    switch (tabBarLabel) {
      case 'Home':
        image = focused ?
          require('../image/home_active.png') :
          require('../image/home_inactive.png');
        break;
      case 'Orders':
        image = focused ?
          require('../image/order_active.png') :
          require('../image/order_inactive.png');
        break;
      case 'Help':
        image = focused ?
          require('../image/help_active.png') :
          require('../image/help_inactive.png');
        break;
      default:
        image = focused ?
          require('../image/profile_active.png') :
          require('../image/profile_inactive.png');
        break;
    }
    return (
      <View>
        <Image
          style={styles.imageStyle}
          source={image}
        />
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    height: 32,
    width: 32
  }
};

export default TabIcon;
