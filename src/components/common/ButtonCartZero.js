import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonCartZero = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    fontSize: 11,
    color: '#000'
  },
  buttonStyle: {
    backgroundColor: '#FFF',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export { ButtonCartZero };
