import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {SelectItem} from '../../../../../../../components/Select/Select';

export function useGenderItems() {
  const {getText} = useLocalizeText();

  const genderItems: SelectItem[] = [
    {
      label: getText(['menu', 'genders', 'Male']),
      value: 'Male',
    },

    {
      label: getText(['menu', 'genders', 'Female']),
      value: 'Female',
    },
  ];

  return genderItems;
}
