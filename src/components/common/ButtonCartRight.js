import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonCartRight = ({ onPress, children }) => {
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
    textAlign: 'right',
    fontSize: 30,
    fontFamily: 'courier',
    fontWeight: 'bold',
    color: '#0F0',
    width: 30
  },
  buttonStyle: {
    backgroundColor: '#FFF',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export { ButtonCartRight };
