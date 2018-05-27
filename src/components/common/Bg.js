import React from 'react';
import { View } from 'react-native';

const Bg = (props) => {
  return (
    <View style={styles.backgroundStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
  }
};

export { Bg };
