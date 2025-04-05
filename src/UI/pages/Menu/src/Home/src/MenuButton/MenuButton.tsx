import React from 'react';
import IconButton from '../../../../../../components/IconButton/IconButton';
import MenuIcon from '../../../../../../../icons/MenuIcon';
import {Navigation} from '../../../../../../../types/navigation';
import {StyleSheet, View} from 'react-native';

type MenuButtonProps = {navigation: Navigation};

function MenuButton({navigation}: MenuButtonProps) {
  function handlePress() {
    navigation.popToTop();
  }
  return (
    <View style={styles.box}>
      <IconButton icon={<MenuIcon size={30} />} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginRight: 25,
  },
});

export default MenuButton;
