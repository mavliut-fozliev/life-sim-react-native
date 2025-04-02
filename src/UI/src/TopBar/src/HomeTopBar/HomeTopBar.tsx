import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fontSizes} from '../../../../../consts/styles';
import IconButton from '../../../components/IconButton/IconButton';
import ArrowLeft from '../../../../../icons/ArrowLeft';
import useZustand from '../../../../../storage/zustand';
import {pageStructure} from '../../../../../consts/pages';
import Menu from '../../../../../icons/Menu';
import Resource from './src/Resource/Resource';
import {playerStore} from '../../../../../storage/store';

type HomeTopBarProps = {
  goBack: () => void;
};

function HomeTopBar({goBack}: HomeTopBarProps) {
  const {currentPage, setCurrentPage} = useZustand();

  const name = playerStore.name.get();
  const surname = playerStore.surname.get();

  const returnToMenu = () => {
    setCurrentPage(pageStructure.menu);
  };

  const isHomePage = currentPage.title === pageStructure.menu.pages.menu_home.title;

  return (
    <View style={styles.box}>
      <View style={styles.button}>
        {isHomePage ? (
          <IconButton icon={<Menu size={29} />} onPress={returnToMenu} />
        ) : (
          <IconButton icon={<ArrowLeft size={35} />} onPress={goBack} />
        )}
      </View>
      <View style={styles.contentBox}>
        <Text numberOfLines={1} style={styles.name}>
          {name} {surname}
        </Text>
        <Resource name="energy" value={12} />
        <Resource name="money" value={34} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  name: {
    fontSize: fontSizes.large,
  },
});

export default HomeTopBar;
