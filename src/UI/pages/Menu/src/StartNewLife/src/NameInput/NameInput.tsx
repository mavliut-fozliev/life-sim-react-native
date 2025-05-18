import React, {useEffect} from 'react';
import ModalTextInput from '../../../../../../components/ModalTextInput/ModalTextInput';
import useStore from '../store';
import {getRandomArrayItem} from '../../../../../../../utils/common';
import {characterNames} from '../../../../../../../consts/character/characterNames';
import {useLocalizeText} from '../../../../../../../locales/useLocalizeText';

function NameInput() {
  const {translate} = useLocalizeText();
  const {name, $name, country, gender, nameIsModified, $nameIsModified} = useStore();

  function handleSave(v: string) {
    $nameIsModified.set(true);
    $name.set(v);
  }

  useEffect(() => {
    if (nameIsModified || !country || !gender) {
      return;
    }

    const names = characterNames[country][gender];
    const randomName = getRandomArrayItem(names);
    if (!randomName) {
      return;
    }

    const localizedName = translate(randomName);

    $nameIsModified.set(false);
    $name.set(localizedName);
  }, [country, gender, translate, $name, $nameIsModified, nameIsModified]);

  return <ModalTextInput value={name} onSave={handleSave} label={translate('Name')} />;
}

export default NameInput;
