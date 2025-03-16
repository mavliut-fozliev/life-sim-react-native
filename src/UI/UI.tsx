import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import TopBar from './src/TopBar/TopBar';
import Stats from './src/Stats/Stats';
import Visualization from './src/Visualization/Visualization';
import Actions from './src/Actions/Actions';

type UIProps = PropsWithChildren<{}>;

function UI({}: UIProps): React.JSX.Element {
  return (
    <View style={styles.ui}>
      <TopBar />
      <Stats />
      <Visualization />
      <Actions />
    </View>
  );
}

const styles = StyleSheet.create({
  ui: {
    backgroundColor: 'white',
    height: 700,
  },
});

export default UI;
