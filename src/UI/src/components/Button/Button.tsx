import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type ButtonProps = {
  label: string;
  onPress: () => void;
};

function Button({label, onPress}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'cyan',
    color: 'red',
  },
});

export default Button;
