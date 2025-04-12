import React, {ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fontSizes} from '../../../consts/styles';
import ArrowRight from '../../../icons/ArrowRight';

type SectionButtonProps = {
  label: string;
  onPress: () => void;
  description?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconText?: string;
};

function SectionButton({label, onPress, description, disabled, icon, iconText}: SectionButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={disabled ? [styles.button, styles.disabled] : styles.button}>
      <View style={styles.labelBox}>
        <View style={styles.labelContent}>
          <Text numberOfLines={1} style={styles.label}>
            {label}
          </Text>
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
        <View style={styles.icon}>
          <Text style={styles.iconText}>{iconText}</Text>
          {icon ?? <ArrowRight size={14} />}
        </View>
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
  labelContent: {
    width: '90%',
  },
  label: {
    fontSize: fontSizes.large,
    fontWeight: 500,
    color: colors.text.secondary,
    marginBottom: 4,
  },
  description: {
    fontSize: fontSizes.medium,
    color: colors.text.secondary,
  },
  icon: {
    width: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: fontSizes.large,
    paddingRight: 2,
  },
});

export default SectionButton;
