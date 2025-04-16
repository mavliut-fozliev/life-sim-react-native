import React, {useEffect} from 'react';
import ModalTextInput from '../../../../../../components/ModalTextInput/ModalTextInput';
import useStore from '../store';
import {getRandomArrayItem} from '../../../../../../../utils/common';
import {characterNames} from '../../../../../../../consts/characterNames';
import {useLocalizeText} from '../../../../../../../locales/useLocalizeText';

function NameInput() {
  const {getText} = useLocalizeText();
  const {name, $name, country, gender} = useStore();

  function handleSave(v: string) {
    $name.set(v);
  }

  useEffect(() => {
    if (!name && country && gender) {
      const names = characterNames[country][gender];
      const randomName = getRandomArrayItem(names) || names[0];
      const localizedName = getText(['characterNames', randomName]);
      $name.set(localizedName);
    }
  }, [name, $name, country, gender, getText]);

  return <ModalTextInput value={name} onSave={handleSave} label={getText(['menu', 'newLifeInputs', 'Name'])} />;
}

export default NameInput;
