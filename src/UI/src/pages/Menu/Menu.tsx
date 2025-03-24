import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../components/Button/Button';
import useZustand from '../../../../storage/zustand';
import {pageStructure} from '../../../../consts/pages';

function Menu() {
  const {setCurrentPage} = useZustand();

  return (
    <View style={styles.box}>
      <Button label="Start new life!" onPress={() => setCurrentPage(pageStructure.menu.pages.menu_startNewLife)} />
      <Button label="Settings" onPress={() => setCurrentPage(pageStructure.menu.pages.menu_settings)} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'gray',
    height: 660,
  },
});

export default Menu;
