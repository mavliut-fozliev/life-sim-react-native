import React, {useEffect} from 'react';
import ModalTextInput from '../../../../../../components/ModalTextInput/ModalTextInput';
import useStore from '../store';

function NameInput() {
  const {name, $name} = useStore();

  function handleSave(v: string) {
    $name.set(v);
  }

  useEffect(() => {
    if (!name) {
      $name.set('Mava');
    }
  }, [name, $name]);

  return <ModalTextInput value={name} onSave={handleSave} />;
}

export default NameInput;
