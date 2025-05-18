import {Gender} from '../../../../../../../../consts/gender';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {SelectItem} from '../../../../../../../components/Select/Select';

export function useGenderItems() {
  const {translate} = useLocalizeText();

  const genderItems: SelectItem[] = [
    {
      label: translate('Male'),
      value: Gender.Male,
    },

    {
      label: translate('Female'),
      value: Gender.Female,
    },
  ];

  return genderItems;
}
