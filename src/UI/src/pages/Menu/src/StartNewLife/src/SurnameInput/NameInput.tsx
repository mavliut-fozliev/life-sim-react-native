import React, {useEffect} from 'react';
import ModalTextInput from '../../../../../../components/ModalTextInput/ModalTextInput';
import {DispatchString} from '../../../../../../../../types/common';
import {newLifeStore} from '../../../../../../../../storage/store';

type SurnameInputProps = {
  surname: string;
  setSurname: DispatchString;
};

function SurnameInput({surname, setSurname}: SurnameInputProps) {
  useEffect(() => {
    const savedSurname = newLifeStore.surname.get();
    if (savedSurname) {
      setSurname(savedSurname);
    } else {
      setSurname('Lava');
    }
  }, [setSurname]);

  return <ModalTextInput value={surname} setValue={setSurname} onSave={newLifeStore.surname.set} />;
}

export default SurnameInput;
