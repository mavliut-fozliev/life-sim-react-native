import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {playerStore} from '../../../storage/player';
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
        <Text>
          {energy}* {money}$
        </Text>
      </View>
      <View>
        <Resource name="health" value={21} />
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
