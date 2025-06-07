import {Countries} from '../../../../../shared/constants/countries';
import {useLocalizeText} from '../../../../../shared/locales/useLocalizeText';
import {SelectItem} from '../../../../../shared/ui/components/Select/Select';

export function useCountryItems() {
  const {translate} = useLocalizeText();

  const countryItems: SelectItem[] = [
    {
      label: ` 🇦🇱  ${translate(Countries.Albania)}`,
      value: Countries.Albania,
      backgroundColor: '#A90B0B',
      color: 'white',
    },
    {
      label: ` 🇷🇺  ${translate(Countries.Russia)}`,
      value: Countries.Russia,
      backgroundColor: '#0337B0',
      color: 'white',
    },
    {
      label: ` 🇹🇷  ${translate(Countries.Turkey)}`,
      value: Countries.Turkey,
      backgroundColor: '#A02A2A',
      color: 'white',
    },
    {
      label: ` 🇺🇸  ${translate(Countries.UnitedStatesOfAmerica)}`,
      value: Countries.UnitedStatesOfAmerica,
      backgroundColor: '#2A4D7B',
      color: 'white',
    },
  ];

  return countryItems;
}
