import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SelectCountry from './src/SelectCountry/SelectCountry';
import SelectCity from './src/SelectCity/SelectCity';
import {newLifeStore} from '../../../../../../storage/store';
import SelectGender from './src/SelectGender/SelectGender';
import ModalTextInput from '../../../../components/ModalTextInput/ModalTextInput';

function StartNewLife() {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');

  function clearCity() {
    newLifeStore.city.set('', setCity);
  }

  return (
    <View>
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
        <ModalTextInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  country: {
    padding: 10,
    zIndex: 5,
  },
  city: {
    padding: 10,
    zIndex: 4,
  },
  gender: {
    padding: 10,
    zIndex: 3,
  },
  name: {
    padding: 10,
    zIndex: 2,
  },
});

export default StartNewLife;
