import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SelectCountry from './src/SelectCountry/SelectCountry';
import SelectCity from './src/SelectCity/SelectCity';
import {newLifeStore, playerStore} from '../../../../../../storage/store';
import SelectGender from './src/SelectGender/SelectGender';
import NameInput from './src/NameInput/NameInput';
import SurnameInput from './src/SurnameInput/NameInput';
import Button from '../../../../components/Button/Button';
import useZustand from '../../../../../../storage/zustand';
import {pageStructure} from '../../../../../../consts/pages';
import {colors} from '../../../../../../consts/styles';
import {getLocalizedText} from '../../../../../../locales/getLocalizedText ';

function StartNewLife() {
  const localizedText = getLocalizedText().menu.button.startNewLife;

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const {setCurrentPage} = useZustand();

  function clearCity() {
    newLifeStore.city.set('', setCity);
  }

  function handleStart() {
    playerStore.country.set(country, setCountry);
    playerStore.city.set(city, setCity);
    playerStore.gender.set(gender, setGender);
    playerStore.name.set(name, setName);
    playerStore.surname.set(surname, setSurname);

    newLifeStore.country.set('', setCountry);
    newLifeStore.city.set('', setCity);
    newLifeStore.gender.set('', setGender);
    newLifeStore.name.set('', setName);
    newLifeStore.surname.set('', setSurname);

    setCurrentPage(pageStructure.home);
  }

  return (
    <View style={styles.box}>
      <SelectCountry country={country} setCountry={setCountry} clearCity={clearCity} />
      <SelectCity city={city} setCity={setCity} country={country} />
      <SelectGender gender={gender} setGender={setGender} />
      <NameInput name={name} setName={setName} />
      <SurnameInput surname={surname} setSurname={setSurname} />
      <Button label={localizedText} onPress={handleStart} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
    height: '100%',
    padding: 20,
    gap: 20,
  },
});

export default StartNewLife;
