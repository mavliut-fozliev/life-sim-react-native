import React, {useEffect} from 'react';
import ModalTextInput from '../../../../../../components/ModalTextInput/ModalTextInput';
import {DispatchString} from '../../../../../../../../types/common';
import {newLifeStore} from '../../../../../../../../storage/store';

type SurnameInputProps = {
  surname: string;
  setSurname: DispatchString;
};

function SurnameInput({surname, setSurname}: SurnameInputProps) {
  function handleSave(v: string) {
    newLifeStore.surname.set(v, setSurname);
  }

  useEffect(() => {
    const savedSurname = newLifeStore.surname.get();
    if (savedSurname) {
      setSurname(savedSurname);
    } else {
      setSurname('Lava');
    }
  }, [setSurname]);

  return <ModalTextInput value={surname} onSave={handleSave} />;
}

export default SurnameInput;
