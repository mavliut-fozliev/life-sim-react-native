import React from 'react';
import {StyleSheet, View} from 'react-native';
import SelectCountry from './src/SelectCountry/SelectCountry';
import SelectCity from './src/SelectCity/SelectCity';
import SelectGender from './src/SelectGender/SelectGender';
import NameInput from './src/NameInput/NameInput';
import SurnameInput from './src/SurnameInput/SurnameInput';
import Button from '../../../../components/Button/Button';
import {PageNames} from '../../../../../consts/pages';
import {colors} from '../../../../../consts/styles';
import {Navigation} from '../../../../../types/navigation';
import useGlobalStore from '../../../../../storage/store';
import {safestr} from '../../../../../utils/common';
import useStore from './src/store';
import usePlayerStore from '../playerStore';

type StartNewLifeProps = {
  navigation: Navigation;
};

function StartNewLife({navigation}: StartNewLifeProps) {
  const {country, city, gender, name, surname, $country, $city, $gender, $name, $surname} = useStore();
  const playerStore = usePlayerStore();
  const {localizedText} = useGlobalStore();
  const text = localizedText?.menu?.button?.startNewLife;

  function handleStart() {
    playerStore.$country.set(country);
    playerStore.$city.set(city);
    playerStore.$gender.set(gender);
    playerStore.$name.set(name);
    playerStore.$surname.set(surname);

    $country.set('');
    $city.set('');
    $gender.set('');
    $name.set('');
    $surname.set('');

    navigation.navigate(PageNames.Home);
  }

  const haveEmptyField = !country || !city || !gender || !name || !surname;

  return (
    <View style={styles.box}>
      <SelectCountry />
      <SelectCity />
      <SelectGender />
      <NameInput />
      <SurnameInput />
      <Button label={safestr(text)} onPress={handleStart} disabled={haveEmptyField} />
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
