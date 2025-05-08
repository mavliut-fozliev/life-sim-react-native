import {Countries} from '../../../../../../../../consts/countries';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {SelectItem} from '../../../../../../../components/Select/Select';

export function useCountryItems() {
  const {getText} = useLocalizeText();

  const countryItems: SelectItem[] = [
    {
      label: ` 🇦🇱  ${getText(['menu', 'countries', Countries.Albania])}`,
      value: Countries.Albania,
      backgroundColor: '#A90B0B',
      color: 'white',
    },
    {
      label: ` 🇷🇺  ${getText(['menu', 'countries', Countries.Russia])}`,
      value: Countries.Russia,
      backgroundColor: '#0337B0',
      color: 'white',
    },
    {
      label: ` 🇹🇷  ${getText(['menu', 'countries', Countries.Turkey])}`,
      value: Countries.Turkey,
      backgroundColor: '#A02A2A',
      color: 'white',
    },
    {
      label: ` 🇺🇸  ${getText(['menu', 'countries', Countries.UnitedStatesOfAmerica])}`,
      value: Countries.UnitedStatesOfAmerica,
      backgroundColor: '#2A4D7B',
      color: 'white',
    },
  ];

  return countryItems;
}
