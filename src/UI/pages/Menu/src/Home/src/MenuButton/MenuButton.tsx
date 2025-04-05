import React from 'react';
import IconButton from '../../../../../../components/IconButton/IconButton';
import MenuIcon from '../../../../../../../icons/MenuIcon';
import {Navigation} from '../../../../../../../types/navigation';

type MenuButtonProps = {navigation: Navigation};

function MenuButton({navigation}: MenuButtonProps) {
  function handlePress() {
    navigation.popToTop();
  }
  return <IconButton icon={<MenuIcon size={35} />} onPress={handlePress} />;
}

export default MenuButton;
