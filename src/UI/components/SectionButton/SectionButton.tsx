import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fontSizes} from '../../../consts/styles';
import ArrowRight from '../../../icons/ArrowRight';

type SectionButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

function SectionButton({label, onPress, disabled}: SectionButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={disabled ? [styles.button, styles.disabled] : styles.button}>
      <View style={styles.labelBox}>
        <Text style={styles.label}>{label}</Text>
        <ArrowRight size={14} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    borderWidth: 1,
    borderColor: colors.border.secondary,
    backgroundColor: colors.button.secondary,
  },
  disabled: {
    opacity: 0.5,
  },
  labelBox: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 2,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  label: {
    fontSize: fontSizes.large,
    fontWeight: 500,
    color: colors.text.secondary,
  },
});

export default SectionButton;
