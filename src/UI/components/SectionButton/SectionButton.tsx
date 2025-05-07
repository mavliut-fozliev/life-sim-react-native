import React, {ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fontSizes} from '../../../consts/styles';
import {useIcon} from '../../../icons/useIcon';
import {Icon} from '../../../consts/icons';

type SectionButtonProps = {
  label: string;
  onPress: () => void;
  mainIcon?: ReactNode;
  description?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconText?: string;
  height?: number;
  extraLine?: ReactNode;
};

function SectionButton({
  label,
  onPress,
  mainIcon,
  description,
  disabled,
  icon,
  iconText,
  height,
  extraLine,
}: SectionButtonProps) {
  const buttonStyles = [styles.button, disabled ? styles.disabled : {}, height ? {height} : {}];
  const arrowRight = useIcon(Icon.ArrowRight, {size: 14});

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={buttonStyles}>
      <View style={styles.labelBox}>
        <View style={styles.labelContent}>
          {mainIcon && <View style={styles.left}>{mainIcon}</View>}
          <View style={styles.right}>
            <Text numberOfLines={1} style={styles.label}>
              {label}
            </Text>
            {description && <Text style={styles.description}>{description}</Text>}
            {extraLine && <View>{extraLine}</View>}
          </View>
        </View>
        <View style={styles.icon}>
          <Text style={styles.iconText}>{iconText}</Text>
          {icon ?? arrowRight}
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
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  labelContent: {
    flexDirection: 'row',
  },
  left: {
    paddingRight: 10,
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'center',
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
