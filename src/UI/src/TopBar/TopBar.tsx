import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {playerStore} from '../../../storage/player';
import Icon from 'react-native-vector-icons/Entypo';

function TopBar() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  useEffect(() => {
    const setUserData = async () => {
      playerStore.setName('Mava', setName);
      playerStore.setSurname('Lava', setSurname);
    };

    setUserData();
  }, []);

  return (
    <View style={styles.box}>
      <Text style={styles.name}>
        {name} {surname}
      </Text>
      <TouchableOpacity onPress={() => console.log('some')}>
        <Icon name="menu" size={30} color="#A1DC33" />
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
