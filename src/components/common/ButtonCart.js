import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonCart = ({ onPress, children }) => {
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
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#FFF',
    // borderTopWidth: 1,
    // borderTopColor: '#E9E9F0',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export { ButtonCart };
