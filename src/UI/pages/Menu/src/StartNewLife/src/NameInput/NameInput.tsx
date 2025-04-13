import React, {useEffect} from 'react';
import ModalTextInput from '../../../../../../components/ModalTextInput/ModalTextInput';
import useStore from '../store';
import useGlobalStore from '../../../../../../../storage/store';
import {getRandomArrayItem} from '../../../../../../../utils/common';
import {characterNames} from '../../../../../../../consts/characterNames';

function NameInput() {
  const {localizedText} = useGlobalStore();
  const {name, $name, country, gender} = useStore();

  function handleSave(v: string) {
    $name.set(v);
  }

  useEffect(() => {
    if (!name) {
      const names = characterNames[country][gender];
      const randomName = getRandomArrayItem(names) || names[0];
      const localizedName = localizedText.characterNames[randomName];
      $name.set(localizedName);
    }
  }, [name, $name, country, gender, localizedText]);

  return <ModalTextInput value={name} onSave={handleSave} label={localizedText.menu.newLifeInputs.Name} />;
}

export default NameInput;
