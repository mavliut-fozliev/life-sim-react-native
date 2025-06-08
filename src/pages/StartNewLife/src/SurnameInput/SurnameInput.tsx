import React, {useEffect} from 'react';
import useStore from '../store';
import {useLocalizeText} from '../../../../shared/locales/useLocalizeText';
import {getRandomArrayItem} from '../../../../shared/utils/common';
import ModalTextInput from '../../../../shared/ui/components/ModalTextInput/ModalTextInput';
import {characterSurnames} from '../../../../features/character/characterSurnames';

function SurnameInput() {
  const {surname, $surname, country, gender, surnameIsModified, $surnameIsModified} = useStore();
  const {translate} = useLocalizeText();

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

    const localizedSurname = translate(randomSurname);

    $surnameIsModified.set(false);
    $surname.set(localizedSurname);
  }, [country, gender, translate, $surname, $surnameIsModified, surnameIsModified]);

  return <ModalTextInput value={surname} onSave={handleSave} label={translate('Surname')} />;
}

export default SurnameInput;
