import React from 'react';
import {StyleSheet, View} from 'react-native';
import Stat from './src/Stat/Stat';
import usePlayerStore from '../../../playerStore';

function Stats() {
  const playerStore = usePlayerStore();

  return (
    <View style={styles.box}>
      <View>
        <Stat name="health" value={playerStore.health} />
        <Stat name="power" value={playerStore.power} />
        <Stat name="age" value={playerStore.age} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#33FFFF',
    height: 160,
  },
});

export default Stats;
