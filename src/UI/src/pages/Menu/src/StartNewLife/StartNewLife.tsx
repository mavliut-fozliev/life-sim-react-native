import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SelectCountry from './src/SelectCountry/SelectCountry';
import SelectCity from './src/SelectCity/SelectCity';
import {newLifeStore} from '../../../../../../storage/store';
import SelectGender from './src/SelectGender/SelectGender';
import NameInput from './src/NameInput/NameInput';
import SurnameInput from './src/SurnameInput/NameInput';
import Button from '../../../../components/Button/Button';
import useZustand from '../../../../../../storage/zustand';
import {pageStructure} from '../../../../../../consts/pages';
import {colors} from '../../../../../../consts/styles';

function StartNewLife() {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const {setCurrentPage} = useZustand();

  function clearCity() {
    newLifeStore.city.set('', setCity);
  }

  return (
    <View style={styles.box}>
      <View style={styles.country}>
        <SelectCountry country={country} setCountry={setCountry} clearCity={clearCity} />
      </View>
      <View style={styles.city}>
        <SelectCity city={city} setCity={setCity} country={country} />
      </View>
      <View style={styles.gender}>
        <SelectGender gender={gender} setGender={setGender} />
      </View>
      <View style={styles.name}>
        <NameInput name={name} setName={setName} />
      </View>
      <View style={styles.surname}>
        <SurnameInput surname={surname} setSurname={setSurname} />
      </View>
      <View style={styles.button}>
        <Button label="Continue" onPress={() => setCurrentPage(pageStructure.home)} />
      </View>
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
  country: {
    zIndex: 4,
  },
  city: {
    zIndex: 3,
  },
  gender: {
    zIndex: 2,
  },
  name: {
    zIndex: 1,
  },
  surname: {
    zIndex: 1,
  },
  button: {
    zIndex: 0,
  },
});

export default StartNewLife;
