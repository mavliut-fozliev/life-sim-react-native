import React from 'react';
import {StyleSheet, View} from 'react-native';
import {getLocalizedText} from '../../../locales/getLocalizedText ';
import {playerStore} from '../../../storage/store';
import SectionButton from '../../components/SectionButton/SectionButton';
import {PageNames} from '../../../consts/pages';
import {colors} from '../../../consts/styles';
import {Navigation} from '../../../types/navigation';
import useZustand from '../../../storage/zustand';

type MenuProps = {
  navigation: Navigation;
};

function Menu({navigation}: MenuProps) {
  const {language} = useZustand();
  const text = getLocalizedText(language).menu.options;

  const gameInProgress = playerStore.name.get()!!;

  return (
    <View style={styles.box}>
      {gameInProgress && <SectionButton label={text.resume} onPress={() => navigation.navigate(PageNames.Home)} />}
      <SectionButton label={text.startNewLife} onPress={() => navigation.navigate(PageNames.StartNewLife)} />
      <SectionButton label={text.settings} onPress={() => navigation.navigate(PageNames.Settings)} />
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
