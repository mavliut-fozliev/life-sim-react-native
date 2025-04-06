import React, {useEffect} from 'react';
import ModalTextInput from '../../../../../../components/ModalTextInput/ModalTextInput';
import useStore from '../store';
import useGlobalStore from '../../../../../../../storage/store';
import {safestr} from '../../../../../../../utils/common';

function NameInput() {
  const {localizedText} = useGlobalStore();
  const {name, $name} = useStore();

  function handleSave(v: string) {
    $name.set(v);
  }

  useEffect(() => {
    if (!name) {
      $name.set('Mava');
    }
  }, [name, $name]);

  return <ModalTextInput value={name} onSave={handleSave} label={safestr(localizedText?.menu?.newLifeInputs?.name)} />;
}

export default NameInput;
