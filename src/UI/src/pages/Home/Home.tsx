import React from 'react';
import {StyleSheet, View} from 'react-native';
import Stats from './src/Stats/Stats';
import Visualization from './src/Visualization/Visualization';
import Actions from './src/Actions/Actions';

type HomeProps = {};

function Home({}: HomeProps): React.JSX.Element {
  return (
    <View style={styles.box}>
      <Stats />
      <Visualization />
      <Actions />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {},
});

export default Home;
