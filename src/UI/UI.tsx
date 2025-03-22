import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './src/pages/Home/Home';
import TopBar from './src/TopBar/TopBar';
import Menu from './src/pages/Menu/Menu';

type UIProps = {};

function UI({}: UIProps): React.JSX.Element {
  return (
    <View style={styles.box}>
      <TopBar />
      {/* <Home /> */}
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    height: 700,
  },
});

export default UI;
