import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {playerStore} from '../../../storage/player';

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
      <Text>
        {name} {surname}
      </Text>
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
