import React from 'react';
import {StyleSheet, View} from 'react-native';
import useZustand from '../../../storage/zustand';
import {findParentPage, pageStructure} from '../../../consts/pages';
import {topBarColor} from '../../../consts/styles';
import HomeTopBar from './src/HomeTopBar/HomeTopBar';
import MenuTopBar from './src/MenuTopBar/MenuTopBar';
import MenuSectionTopBar from './src/MenuSectionTopBar/MenuSectionTopBar';

function TopBar() {
  const {currentPage, setCurrentPage} = useZustand();

  const goBack = () => {
    const parentPage = findParentPage(currentPage.title);
    if (parentPage) {
      setCurrentPage(parentPage);
    }
  };

  return (
    <View style={styles.box}>
      {currentPage.title === pageStructure.menu.title ? (
        <MenuTopBar />
      ) : currentPage.title === pageStructure.menu.pages.menu_home.title ? (
        <HomeTopBar goBack={goBack} />
      ) : (
        <MenuSectionTopBar goBack={goBack} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: topBarColor,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default TopBar;
