import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {playerStore} from '../../../storage/store';
import SectionButton from '../../components/SectionButton/SectionButton';
import {PageNames} from '../../../consts/pages';
import {colors} from '../../../consts/styles';
import {Navigation} from '../../../types/navigation';
import useGlobalStore from '../../../storage/store';
import {safestr} from '../../../utils/common';
import usePlayerStore from './src/playerStore';

type MenuProps = {
  navigation: Navigation;
};

function Menu({navigation}: MenuProps) {
  const {localizedText} = useGlobalStore();
  const playerStore = usePlayerStore();
  const options = localizedText?.menu?.options;

  const gameInProgress = playerStore.name!!;

  return (
    <View style={styles.box}>
      {gameInProgress && (
        <SectionButton label={safestr(options.resume)} onPress={() => navigation.navigate(PageNames.Home)} />
      )}
      <SectionButton
        label={safestr(options?.startNewLife)}
        onPress={() => navigation.navigate(PageNames.StartNewLife)}
      />
      <SectionButton label={safestr(options?.settings)} onPress={() => navigation.navigate(PageNames.Settings)} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
    height: '100%',
    gap: 20,
    padding: 20,
  },
});

export default Menu;
