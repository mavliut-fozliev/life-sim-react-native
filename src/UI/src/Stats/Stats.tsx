import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {playerStore} from '../../../storage/player';
import Stat from './src/Stat/Stat';
import Resource from './src/Resource/Resource';

function Stats() {
  const [energy, setEnergy] = useState(0);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    const setUserData = async () => {
      playerStore.setMoney(0, setMoney);
      playerStore.setEnergy(8, setEnergy);
    };

    setUserData();
  }, []);

  return (
    <View style={styles.box}>
      <View>
        <Resource name="money" value={money} />
        <Resource name="energy" value={energy} />
      </View>
      <View>
        <Stat name="health" value={71} />
        <Stat name="power" value={45} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#33FFFF',
    height: 160,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Stats;
