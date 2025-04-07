import React from 'react';
import {StyleSheet, View} from 'react-native';
import Stat from './src/Stat/Stat';
import usePlayerStore from '../../../../../playerStore';

function Stats() {
  const playerStore = usePlayerStore();

  return (
    <View style={styles.box}>
      <View>
        <Stat name="age" value={playerStore.age} />
      </View>
      <View>
        <Stat name="health" value={playerStore.health} />
        <Stat name="power" value={playerStore.power} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,0,0,0.2)',
    height: 160,
  },
});

export default Stats;
