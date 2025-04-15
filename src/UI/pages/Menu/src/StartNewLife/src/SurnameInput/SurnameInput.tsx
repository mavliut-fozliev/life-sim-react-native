import React, {useEffect} from 'react';
import ModalTextInput from '../../../../../../components/ModalTextInput/ModalTextInput';
import useStore from '../store';
import {useLocalizeText} from '../../../../../../../locales/useLocalizeText';

function SurnameInput() {
  const {surname, $surname} = useStore();
  const {getText} = useLocalizeText();

  function handleSave(v: string) {
    $surname.set(v);
  }

  useEffect(() => {
    if (!surname) {
      $surname.set('Mava');
    }
  }, [surname, $surname]);

  return <ModalTextInput value={surname} onSave={handleSave} label={getText(['menu', 'newLifeInputs', 'Surname'])} />;
}

export default SurnameInput;
