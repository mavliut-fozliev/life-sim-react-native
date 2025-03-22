import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {playerStore} from '../../../storage/player';
import Resource from './src/Resource/Resource';

function TopBar() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [energy, setEnergy] = useState(0);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    const setUserData = async () => {
      playerStore.name.set('Mava', setName);
      playerStore.surname.set('Lava', setSurname);
      playerStore.money.set(134, setMoney);
      playerStore.energy.set(8, setEnergy);
    };

    setUserData();
  }, []);

  return (
    <View style={styles.box}>
      <Text style={styles.name}>
        {name} {surname}
      </Text>
      <Resource name="money" value={money} />
      <Resource name="energy" value={energy} />
      <TouchableOpacity onPress={() => console.log('some')}>
        <Text>history</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'blue',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  name: {
    fontSize: 20,
  },
});

export default TopBar;
