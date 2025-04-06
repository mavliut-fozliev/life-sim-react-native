import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fontSizes} from '../../../consts/styles';

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

function Button({label, onPress, disabled}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}
      style={disabled ? [styles.button, styles.disabled] : styles.button}>
      <View style={styles.labelBox}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.button.primary,
  },
  disabled: {
    opacity: 0.5,
  },
  labelBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 2,
  },
  label: {
    fontSize: fontSizes.large,
    color: colors.text.primary,
  },
});

export default Button;
