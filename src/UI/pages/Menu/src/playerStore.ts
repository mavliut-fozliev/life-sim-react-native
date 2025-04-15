import {create} from 'zustand';
import {EnumField, FieldLimits, NumberField, StoreFields, StringField} from '../../../../types/store';
import {getInitializer} from '../../../../utils/storeHelpers';
import {Countries} from '../../../../consts/countries';
import {Cities} from '../../../../consts/cities';

type StoreState = StringField<'name' | 'surname'> &
  NumberField<'age' | 'money' | 'energy' | 'health' | 'power'> &
  EnumField<'country', Countries> &
  EnumField<'city', Cities> &
  EnumField<'gender', 'Male' | 'Female'>;

const fields: StoreFields = {
  country: 'str',
  city: 'str',
  gender: 'str',
  name: 'str',
  surname: 'str',
  age: 'num',
  money: 'num',
  energy: 'num',
  health: 'num',
  power: 'num',
};

const limits: FieldLimits = {
  min: {
    age: 0,
    money: 0,
    energy: 0,
    health: 0,
    power: 0,
  },
  max: {
    money: 10e12 - 1,
    health: 100,
    power: 100,
  },
};

const initializer = getInitializer<StoreState>('player', fields, limits);
const usePlayerStore = create(initializer);
export default usePlayerStore;
