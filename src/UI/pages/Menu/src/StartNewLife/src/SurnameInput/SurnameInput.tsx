import React, {useEffect} from 'react';
import ModalTextInput from '../../../../../../components/ModalTextInput/ModalTextInput';
import useStore from '../store';
import {useLocalizeText} from '../../../../../../../locales/useLocalizeText';
import {getRandomArrayItem} from '../../../../../../../utils/common';
import {characterSurnames} from '../../../../../../../consts/character/characterSurnames';

function SurnameInput() {
  const {surname, $surname, country, gender, surnameIsModified, $surnameIsModified} = useStore();
  const {getText} = useLocalizeText();

  function handleSave(v: string) {
    $surnameIsModified.set(true);
    $surname.set(v);
  }

  useEffect(() => {
    if (surnameIsModified || !country || !gender) {
      return;
    }

    const surnames = characterSurnames[country][gender];
    const randomSurname = getRandomArrayItem(surnames);
    if (!randomSurname) {
      return;
    }

    const localizedSurname = getText(['character', 'surnames', randomSurname]);

    $surnameIsModified.set(false);
    $surname.set(localizedSurname);
  }, [country, gender, getText, $surname, $surnameIsModified, surnameIsModified]);

  return <ModalTextInput value={surname} onSave={handleSave} label={getText(['menu', 'newLifeInputs', 'Surname'])} />;
}

export default SurnameInput;
