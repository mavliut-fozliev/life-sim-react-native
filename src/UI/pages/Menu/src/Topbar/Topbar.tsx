import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Resource from '../../../../components/Resource/Resource';
import usePlayerStore from '../playerStore';
import {fontSizes} from '../../../../../consts/styles';
import IconButton from '../../../../components/IconButton/IconButton';
import MenuIcon from '../../../../../icons/MenuIcon';
import {useNavigation} from '@react-navigation/native';
import {useNavigate} from '../../../../../hooks/useNavigate';
import useGlobalStore from '../../../../../storage/store';
import {PageNames} from '../../../../../consts/pages';
import {ObjectRecord} from '../../../../../types/common';
import ArrowLeft from '../../../../../icons/ArrowLeft';

function Topbar() {
  const playerStore = usePlayerStore();
  const navigate = useNavigate(useNavigation());
  const {currentPage} = useGlobalStore();

  function handlePress() {
    navigate.stepBack();
  }

  const button: ObjectRecord<React.JSX.Element> = {
    [PageNames.Menu]: <></>,
    [PageNames.Home]: <IconButton icon={<MenuIcon size={30} />} onPress={handlePress} />,
  };

  return (
    <View style={styles.box}>
      {button[currentPage] || <IconButton icon={<ArrowLeft size={36} />} onPress={handlePress} />}
      <Text numberOfLines={1} style={styles.name}>
        {playerStore.name} {playerStore.surname}
      </Text>
      <Resource name="energy" value={playerStore.energy} />
      <Resource name="money" value={playerStore.money} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: fontSizes.large,
  },
});

export default Topbar;
