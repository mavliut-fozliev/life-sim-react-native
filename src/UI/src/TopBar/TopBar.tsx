import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {playerStore} from '../../../storage/store';
import Resource from './src/Resource/Resource';
import IconButton from '../components/IconButton/IconButton';
import ArrowLeft from '../../../icons/ArrowLeft';
import Menu from '../../../icons/Menu';
import useZustand from '../../../storage/zustand';
import {findParentPage, pageStructure} from '../../../consts/pages';

function TopBar() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [energy, setEnergy] = useState(0);
  const [money, setMoney] = useState(0);
  const {currentPage, setCurrentPage} = useZustand();

  useEffect(() => {
    const setUserData = async () => {
      playerStore.name.set('Mava', setName);
      playerStore.surname.set('Lava', setSurname);
      playerStore.money.set(134, setMoney);
      playerStore.energy.set(8, setEnergy);
    };

    setUserData();
  }, []);

  const goBack = () => {
    const parentPage = findParentPage(currentPage.title);
    if (parentPage) {
      setCurrentPage(parentPage);
    }
  };

  const returnToMenu = () => {
    setCurrentPage(pageStructure.menu);
  };

  return (
    <View style={styles.box}>
      {currentPage.parentTitle && <IconButton icon={<ArrowLeft size={30} />} onPress={goBack} />}
      {currentPage.title === pageStructure.home.title && (
        <IconButton icon={<Menu size={24} />} onPress={returnToMenu} />
      )}
      <Text style={styles.name}>
        {name} {surname}
      </Text>
      <Resource name="energy" value={energy} />
      <Resource name="money" value={money} />
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
