import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {playerStore} from '../../../storage/player';

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
      <Text>
        {energy}* {money}$
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
    height: 160,
  },
});

export default Stats;
