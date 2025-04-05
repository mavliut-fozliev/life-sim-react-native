import {create} from 'zustand';
import {NumberField, StoreFields, StringField} from '../../../../types/store';
import {getInitializer} from '../../../../utils/storeHelpers';

type StoreState = StringField<'country' | 'city' | 'gender' | 'name' | 'surname'> &
  NumberField<'money' | 'energy' | 'health' | 'power'>;

const fields: StoreFields = {
  country: 'str',
  city: 'str',
  gender: 'str',
  name: 'str',
  surname: 'str',
  money: 'num',
  energy: 'num',
  health: 'num',
  power: 'num',
};

const initializer = getInitializer<StoreState>('player', fields);
const usePlayerStore = create(initializer);
export default usePlayerStore;
