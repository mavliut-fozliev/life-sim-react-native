import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Resource from '../../../../components/Resource/Resource';
import usePlayerStore from '../store/playerStore';
import {colors, fontSizes} from '../../../../../consts/styles';
import IconButton from '../../../../components/IconButton/IconButton';
import {useNavigation} from '@react-navigation/native';
import {useNavigate} from '../../../../../hooks/useNavigate';
import useGlobalStore from '../../../../../storage/store';
import {PageNames} from '../../../../../consts/pages';
import {ObjectRecord} from '../../../../../types/common';
import {useLocalizeText} from '../../../../../locales/useLocalizeText';
import {ResourceVariant} from '../../../../../types/resources';
import {Icon} from '../../../../../types/icons';
import {useIcon} from '../../../../../icons/useIcon';

function Topbar() {
  const playerStore = usePlayerStore();
  const {currentPage} = useGlobalStore();

  const navigate = useNavigate(useNavigation());
  const {getText} = useLocalizeText();

  function handlePress() {
    navigate.stepBack();
  }

  const menuIcon = useIcon(Icon.MenuIcon, {size: 30});
  const arrowLeft = useIcon(Icon.ArrowLeft, {size: 30});

  const buttons: ObjectRecord<React.JSX.Element> = {
    [PageNames.Menu]: <></>,
    [PageNames.Home]: <IconButton icon={menuIcon} onPress={handlePress} />,
  };

  const titles: ObjectRecord<string> = {
    [PageNames.Menu]: getText(['menu', 'options', 'Menu']),
    [PageNames.StartNewLife]: getText(['menu', 'options', 'Start New Life']),
    [PageNames.Settings]: getText(['menu', 'options', 'Settings']),
  };
  const title = titles[currentPage];
  const haveTitle = title !== undefined;

  return (
    <View style={styles.box}>
      <View style={styles.content}>
        <View style={styles.button}>
          {buttons[currentPage] || <IconButton icon={arrowLeft} onPress={handlePress} />}
        </View>
        {haveTitle ? (
          <View style={styles.title}>
            <Text numberOfLines={1} style={styles.titleText}>
              {title}
            </Text>
          </View>
        ) : (
          <View style={styles.name}>
            <Text numberOfLines={1} style={styles.nameText}>
              {playerStore.name} {playerStore.surname}
            </Text>
          </View>
        )}
        {!haveTitle && (
          <View style={styles.resources}>
            <Resource name={ResourceVariant.energy} value={playerStore.energy} />
            <Resource name={ResourceVariant.money} value={playerStore.money} />
          </View>
        )}
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
    width: '20%',
    alignItems: 'center',
  },
  title: {
    width: '80%',
  },
  titleText: {
    fontSize: fontSizes.large,
  },
  name: {
    width: '40%',
  },
  nameText: {
    fontSize: fontSizes.small,
  },
  resources: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Topbar;
