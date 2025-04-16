import {countryCities} from '../../../../../../../../consts/cities';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {SelectItem} from '../../../../../../../components/Select/Select';
import useStore from '../../store';

export function useCityItems() {
  const {country} = useStore();
  const {getText} = useLocalizeText();

  if (!country || !countryCities[country]) {
    return [];
  }

  const cityItems: SelectItem[] = Object.keys(countryCities[country]).map(city => ({
    label: getText(['menu', 'cities', city]),
    value: city,
  }));

  return cityItems;
}
