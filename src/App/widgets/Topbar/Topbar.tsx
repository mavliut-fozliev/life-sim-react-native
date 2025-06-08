import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useGameStore from '../../../shared/store/gameStore';
import {useNavigate} from '../../../shared/hooks/useNavigate';
import {useLocalizeText} from '../../../shared/locales/useLocalizeText';
import {useIcon} from '../../../shared/icons/useIcon';
import {Icon} from '../../../shared/icons/icons';
import {ObjectRecord} from '../../../shared/types/common';
import {PageNames} from '../../../shared/constants/pages';
import IconButton from '../../../shared/ui/components/IconButton/IconButton';
import Resource from '../../../shared/ui/components/Resource/Resource';
import {ResourceVariant} from '../../../shared/constants/resources';
import {colors, fontSizes} from '../../../shared/constants/styles';
import {usePlayer} from '../../../features/character/hooks/usePlayer';

function Topbar() {
  const {currentPage} = useGameStore();
  const player = usePlayer();

  const navigate = useNavigate(useNavigation());
  const {translate} = useLocalizeText();

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
    [PageNames.Menu]: translate('Menu'),
    [PageNames.StartNewLife]: translate('Start New Life'),
    [PageNames.Settings]: translate('Settings'),
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
              {player.name} {player.surname}
            </Text>
          </View>
        )}
        {!haveTitle && (
          <View style={styles.resources}>
            <Resource name={ResourceVariant.energy} value={player.energy} />
            <Resource name={ResourceVariant.money} value={player.money} />
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
  titleText: {},
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
