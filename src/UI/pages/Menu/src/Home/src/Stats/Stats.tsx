import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Stat from './src/Stat/Stat';
import {playerStore} from '../../../../../../../storage/store';

function Stats() {
  const [health, setHealth] = useState(0);
  const [power, setPower] = useState(0);

  useEffect(() => {
    const setUserData = async () => {
      playerStore.health.set(74, setHealth);
      playerStore.power.set(43, setPower);
    };

    setUserData();
  }, []);

  return (
    <View style={styles.box}>
      <View>
        <Stat name="health" value={health} />
        <Stat name="power" value={power} />
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
