import {Gender} from '../../../../../../../../consts/gender';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {SelectItem} from '../../../../../../../components/Select/Select';

export function useGenderItems() {
  const {getText} = useLocalizeText();

  const genderItems: SelectItem[] = [
    {
      label: getText(['menu', 'genders', 'Male']),
      value: Gender.Male,
    },

    {
      label: getText(['menu', 'genders', 'Female']),
      value: Gender.Female,
    },
  ];

  return genderItems;
}
