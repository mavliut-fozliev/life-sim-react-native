import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {playerStore} from '../../../storage/player';

function TopBar() {
  const [user, setUser] = useState({name: '', surname: ''});
  const [money, setMoney] = useState(0);

  useEffect(() => {
    const setUserData = async () => {
      playerStore.setName('Mava');
      playerStore.setSurname('Lava');
      playerStore.setMoney(0);

      const name = playerStore.getName();
      const surname = playerStore.getSurname();

      if (name && surname) {
        setUser({name, surname});
      }

      const moneyData = playerStore.getMoney();

      if (moneyData) {
        setMoney(moneyData);
      }
    };

    setUserData();

    setTimeout(() => {
      const newMoney = playerStore.increaseMoney(4);
      if (newMoney) {
        setMoney(newMoney);
      }
    }, 3000);
  }, []);

  return (
    <View style={styles.box}>
      <Text>{user.name}</Text>
      <Text>{money}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'blue',
    height: 40,
  },
});

export default TopBar;
