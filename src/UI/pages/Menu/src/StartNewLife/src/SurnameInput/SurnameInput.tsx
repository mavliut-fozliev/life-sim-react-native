import React, {useEffect} from 'react';
import ModalTextInput from '../../../../../../components/ModalTextInput/ModalTextInput';
import useStore from '../store';
import {useLocalizeText} from '../../../../../../../locales/useLocalizeText';
import {getRandomArrayItem} from '../../../../../../../utils/common';
import {characterSurnames} from '../../../../../../../consts/characterSurnames';

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

    const names = characterSurnames[country][gender];
    const randomName = getRandomArrayItem(names) || names[0];
    const localizedName = getText(['characterSurnames', randomName]);

    $surnameIsModified.set(false);
    $surname.set(localizedName);
  }, [country, gender, getText, $surname, $surnameIsModified, surnameIsModified]);

  return <ModalTextInput value={surname} onSave={handleSave} label={getText(['menu', 'newLifeInputs', 'Surname'])} />;
}

export default SurnameInput;
