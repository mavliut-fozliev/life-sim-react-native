import {Countries} from '../../../../../../../../consts/countries';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {SelectItem} from '../../../../../../../components/Select/Select';

export function useCountryItems() {
  const {getText} = useLocalizeText();

  const countryItems: SelectItem[] = [
    {
      label: ` 🇦🇱  ${getText(['menu', 'countries', 'Albania'])}`,
      value: Countries.ALB,
      backgroundColor: '#A90B0B',
      color: 'white',
    },
    {
      label: ` 🇷🇺  ${getText(['menu', 'countries', 'Russia'])}`,
      value: Countries.RUS,
      backgroundColor: '#0337B0',
      color: 'white',
    },
    {
      label: ` 🇹🇷  ${getText(['menu', 'countries', 'Turkey'])}`,
      value: Countries.TUR,
      backgroundColor: '#A02A2A',
      color: 'white',
    },
    {
      label: ` 🇺🇸  ${getText(['menu', 'countries', 'United States of America'])}`,
      value: Countries.USA,
      backgroundColor: '#2A4D7B',
      color: 'white',
    },
  ];

  return countryItems;
}
