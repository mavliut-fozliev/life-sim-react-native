import React, {useEffect} from 'react';
import ModalTextInput from '../../../../../../components/ModalTextInput/ModalTextInput';
import {DispatchString} from '../../../../../../../../types/common';
import {newLifeStore} from '../../../../../../../../storage/store';

type NameInputProps = {
  name: string;
  setName: DispatchString;
};

function NameInput({name, setName}: NameInputProps) {
  useEffect(() => {
    const savedName = newLifeStore.name.get();
    if (savedName) {
      setName(savedName);
    } else {
      setName('Mava');
    }
  }, [setName]);

  return <ModalTextInput value={name} setValue={setName} onSave={newLifeStore.name.set} />;
}

export default NameInput;
