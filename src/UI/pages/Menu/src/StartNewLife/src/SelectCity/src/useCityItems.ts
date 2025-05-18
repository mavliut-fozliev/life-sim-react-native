import {countryCities} from '../../../../../../../../consts/cities';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {SelectItem} from '../../../../../../../components/Select/Select';
import useStore from '../../store';

export function useCityItems() {
  const {country} = useStore();
  const {translate} = useLocalizeText();

  if (!country || !countryCities[country]) {
    return [];
  }

  const cityItems: SelectItem[] = Object.keys(countryCities[country]).map(city => ({
    label: translate(city),
    value: city,
  }));

  return cityItems;
}
