import React from 'react';
import {StyleSheet, View} from 'react-native';
import TopBar from './src/TopBar/TopBar';
import useZustand from '../storage/zustand';
import Menu from './src/pages/Menu/Menu';
import Home from './src/pages/Home/Home';
import StartNewLife from './src/pages/Menu/src/StartNewLife/StartNewLife';
import Settings from './src/pages/Menu/src/Settings/Settings';
import {colors} from '../consts/styles';

type UIProps = {};

const pageComponents: Record<string, React.JSX.Element> = {
  menu: <Menu />,
  home: <Home />,
  menu_startNewLife: <StartNewLife />,
  menu_settings: <Settings />,
};

function UI({}: UIProps): React.JSX.Element {
  const {currentPage} = useZustand();

  return (
    <View style={styles.box}>
      <TopBar />
      {pageComponents[currentPage.title]}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.primary,
    height: '100%',
  },
});

export default UI;
