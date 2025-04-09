import React from 'react';
import {TouchableOpacity} from 'react-native';

type IconButtonProps = {
  icon: React.JSX.Element;
  onPress: () => void;
};

function IconButton({icon, onPress}: IconButtonProps) {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
}

export default IconButton;
