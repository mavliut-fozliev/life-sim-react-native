import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Navigation} from '../../../shared/types/navigation';
import Stats from './src/sections/stats/Stats/Stats';
import Visualization from './src/sections/visualization/Visualization/Visualization';
import Actions from './src/sections/actions/Actions/Actions';

type HomeProps = {
  navigation: Navigation;
};

function Home({navigation}: HomeProps): React.JSX.Element {
  return (
    <View style={styles.box}>
      <Stats />
      <Visualization />
      <Actions navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  box: {},
});

export default Home;
