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
import {playerId} from '../../shared/constants/character/player';
import {ImmuneSystem} from '../../shared/constants/character/genetics';

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
    playerStore.$person.set({
      id: playerId,
      country,
      city,
      gender,
      name,
      surname,
      money: 0,
      energy: 10,
      age: 0,
      health: 60,
      power: 10,
      charm: 20,
      mood: 60,
      sprite: {
        body: 'light',
        eyes: 'black',
        mouth: 'smile',
      },
      genetics: {
        immuneSystem: ImmuneSystem.Normal,
      },
      effects: [],
    });
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
