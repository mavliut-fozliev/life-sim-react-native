import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import SelectCountry from './src/SelectCountry/SelectCountry';
import SelectCity from './src/SelectCity/SelectCity';
import SelectGender from './src/SelectGender/SelectGender';
import NameInput from './src/NameInput/NameInput';
import SurnameInput from './src/SurnameInput/SurnameInput';
import {PageNames} from '../../shared/constants/pages';
import {colors} from '../../shared/constants/styles';
import {Navigation} from '../../shared/types/navigation';
import useStore from './src/store';
import usePlayerStore from '../../shared/store/playerStore';
import {useNavigate} from '../../shared/hooks/useNavigate';
import {useLocalizeText} from '../../shared/locales/useLocalizeText';
import {useCreateCharacters} from './src/useCreateCharacters';
import useGameStore from '../../shared/store/gameStore';
import Button from '../../shared/ui/components/Button/Button';

type StartNewLifeProps = {
  navigation: Navigation;
};

function StartNewLife({navigation}: StartNewLifeProps) {
  const {
    country,
    city,
    gender,
    name,
    surname,
    $country,
    $city,
    $gender,
    $name,
    $surname,
    $nameIsModified,
    $surnameIsModified,
  } = useStore();

  const playerStore = usePlayerStore();
  const {$gameInProgress} = useGameStore();
  const gameStore = useGameStore();

  const {translate} = useLocalizeText();
  const navigate = useNavigate(navigation);
  const createCharacters = useCreateCharacters();

  function setInitialValues() {
    playerStore.$country.set(country);
    playerStore.$city.set(city);
    playerStore.$gender.set(gender);
    playerStore.$name.set(name);
    playerStore.$surname.set(surname);

    playerStore.$money.set(0);
    playerStore.$energy.set(10);

    playerStore.$age.set(0);
    playerStore.$health.set(60);
    playerStore.$power.set(10);
    playerStore.$charm.set(20);

    playerStore.$mood.set(60);
  }

  function resetNewLifeStore() {
    $country.set('');
    $city.set('');
    $gender.set('');
    $name.set('');
    $surname.set('');
    $nameIsModified.set(false);
    $surnameIsModified.set(false);
  }

  function resetGameStore() {
    gameStore.$history.set({});
  }

  function startGame() {
    $gameInProgress.set(true);
    navigate.stepForward(PageNames.Menu);
    navigate.stepForward(PageNames.Home);
  }

  function handleStart() {
    setInitialValues();
    createCharacters();
    resetNewLifeStore();
    resetGameStore();
    startGame();
  }

  const haveEmptyField = !country || !city || !gender || !name || !surname;

  return (
    <View style={styles.box}>
      <ScrollView contentContainerStyle={styles.scrollBox}>
        <SelectCountry />
        <SelectCity />
        <SelectGender />
        <NameInput />
        <SurnameInput />
        <Button label={translate('Start!')} onPress={handleStart} disabled={haveEmptyField} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  scrollBox: {
    padding: 20,
    gap: 20,
  },
});

export default StartNewLife;
