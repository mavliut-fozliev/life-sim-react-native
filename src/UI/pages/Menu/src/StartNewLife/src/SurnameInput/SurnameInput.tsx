import React, {useEffect} from 'react';
import ModalTextInput from '../../../../../../components/ModalTextInput/ModalTextInput';
import useStore from '../store';

function SurnameInput() {
  const {surname, $surname} = useStore();

  function handleSave(v: string) {
    $surname.set(v);
  }

  useEffect(() => {
    if (!surname) {
      $surname.set('Mava');
    }
  }, [surname, $surname]);

  return <ModalTextInput value={surname} onSave={handleSave} />;
}

export default SurnameInput;
