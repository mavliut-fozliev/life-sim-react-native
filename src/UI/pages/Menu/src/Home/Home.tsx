import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import Visualization from './src/sections/visualization/Visualization/Visualization';
import {Navigation} from '../../../../../types/navigation';
import Actions from './src/sections/actions/Actions/Actions';
import Stats from './src/sections/stats/Stats/Stats';

type HomeProps = {
  navigation: Navigation;
};

function Home({navigation}: HomeProps): React.JSX.Element {
  return (
    <ImageBackground source={require('../../../../../assets/images/background.jpg')} style={styles.background}>
      <View style={styles.box}>
        <Stats />
        <Visualization />
        <Actions navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  box: {},
});

export default Home;
