import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Resource from '../../../../components/Resource/Resource';
import usePlayerStore from '../playerStore';
import {colors, fontSizes} from '../../../../../consts/styles';
import IconButton from '../../../../components/IconButton/IconButton';
import MenuIcon from '../../../../../icons/MenuIcon';
import {useNavigation} from '@react-navigation/native';
import {useNavigate} from '../../../../../hooks/useNavigate';
import useGlobalStore from '../../../../../storage/store';
import {PageNames} from '../../../../../consts/pages';
import {ObjectRecord} from '../../../../../types/common';
import ArrowLeft from '../../../../../icons/ArrowLeft';
import {safestr} from '../../../../../utils/common';

function Topbar() {
  const playerStore = usePlayerStore();
  const navigate = useNavigate(useNavigation());
  const {currentPage, localizedText} = useGlobalStore();

  function handlePress() {
    navigate.stepBack();
  }

  const button: ObjectRecord<React.JSX.Element> = {
    [PageNames.Menu]: <></>,
    [PageNames.Home]: <IconButton icon={<MenuIcon size={26} />} onPress={handlePress} />,
  };

  const title: ObjectRecord<string> = {
    [PageNames.Menu]: safestr(localizedText.menu?.options?.menu),
    [PageNames.StartNewLife]: safestr(localizedText.menu?.options?.startNewLife),
    [PageNames.Settings]: safestr(localizedText.menu?.options?.settings),
  };

  return (
    <View style={styles.box}>
      <View style={styles.content}>
        <View style={styles.button}>
          {button[currentPage] || <IconButton icon={<ArrowLeft size={26} />} onPress={handlePress} />}
        </View>
        <View style={styles.name}>
          <Text numberOfLines={1} style={styles.nameText}>
            {title[currentPage] ?? `${playerStore.name} ${playerStore.surname}`}
          </Text>
        </View>
        <View style={styles.resources}>
          <Resource name="energy" value={playerStore.energy} />
          <Resource name="money" value={playerStore.money} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.primary,
    paddingTop: 30,
  },
  content: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: '10%',
    alignItems: 'center',
  },
  name: {
    width: '50%',
  },
  nameText: {
    fontSize: fontSizes.large,
  },
  resources: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Topbar;
