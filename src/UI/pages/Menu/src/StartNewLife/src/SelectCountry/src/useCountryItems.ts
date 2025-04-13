import {Countries} from '../../../../../../../../consts/countries';
import useGlobalStore from '../../../../../../../../storage/store';
import {SelectItem} from '../../../../../../../components/Select/Select';

export function useCountryItems() {
  const {localizedText} = useGlobalStore();

  const countryItems: SelectItem[] = [
    {
      label: ` 🇦🇱  ${localizedText.menu.countries.Albania}`,
      value: Countries.ALB,
      backgroundColor: '#A90B0B',
      color: 'white',
    },
    {
      label: ` 🇷🇺  ${localizedText.menu.countries.Russia}`,
      value: Countries.RUS,
      backgroundColor: '#0337B0',
      color: 'white',
    },
    {
      label: ` 🇹🇷  ${localizedText.menu.countries.Turkey}`,
      value: Countries.TUR,
      backgroundColor: '#A02A2A',
      color: 'white',
    },
    {
      label: ` 🇺🇸  ${localizedText.menu.countries['United States of America']}`,
      value: Countries.USA,
      backgroundColor: '#2A4D7B',
      color: 'white',
    },
  ];

  return countryItems;
}
