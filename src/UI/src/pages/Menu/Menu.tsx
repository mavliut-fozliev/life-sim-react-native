import React from 'react';
import {StyleSheet, View} from 'react-native';
import useZustand from '../../../../storage/zustand';
import {pageStructure} from '../../../../consts/pages';
import {colors} from '../../../../consts/styles';
import SectionButton from '../../components/SectionButton/SectionButton';
import {getLocalizedText} from '../../../../locales/getLocalizedText ';

function Menu() {
  const {setCurrentPage} = useZustand();
  const text = getLocalizedText().menu.options;

  return (
    <View style={styles.box}>
      <SectionButton
        label={text.startNewLife}
        onPress={() => setCurrentPage(pageStructure.menu.pages.menu_startNewLife)}
      />
      <SectionButton label={text.settings} onPress={() => setCurrentPage(pageStructure.menu.pages.menu_settings)} />
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
