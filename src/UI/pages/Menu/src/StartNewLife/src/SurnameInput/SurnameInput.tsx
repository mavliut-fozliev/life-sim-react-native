import React, {useEffect} from 'react';
import ModalTextInput from '../../../../../../components/ModalTextInput/ModalTextInput';
import useStore from '../store';
import {safestr} from '../../../../../../../utils/common';
import useGlobalStore from '../../../../../../../storage/store';

function SurnameInput() {
  const {localizedText} = useGlobalStore();
  const {surname, $surname} = useStore();

  function handleSave(v: string) {
    $surname.set(v);
  }

  useEffect(() => {
    if (!surname) {
      $surname.set('Mava');
    }
  }, [surname, $surname]);

  return (
    <ModalTextInput value={surname} onSave={handleSave} label={safestr(localizedText?.menu?.newLifeInputs?.surname)} />
  );
}

export default SurnameInput;
