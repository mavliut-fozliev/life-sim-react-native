import {Gender} from '../../../../../shared/constants/gender';
import {useLocalizeText} from '../../../../../shared/locales/useLocalizeText';
import {SelectItem} from '../../../../../shared/ui/components/Select/Select';

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
