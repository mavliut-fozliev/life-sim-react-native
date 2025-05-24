import {create} from 'zustand';
import {EnumField, FieldLimits, NumberField, ObjectField, StoreFields, StringField} from '../../../../../types/store';
import {Countries} from '../../../../../consts/countries';
import {Cities} from '../../../../../consts/cities';
import {Gender} from '../../../../../consts/gender';
import {CommonSpriteVariants} from '../../../../../types/people';
import {getInitializer} from '../../../../../utils/store/storeInitializer';

type StoreState = StringField<'name' | 'surname'> &
  NumberField<'age' | 'money' | 'energy' | 'health' | 'power' | 'charm' | 'mood'> &
  EnumField<'country', Countries> &
  EnumField<'city', Cities> &
  EnumField<'gender', Gender> &
  ObjectField<'sprite', CommonSpriteVariants>;

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
  charm: 'num',
  mood: 'num',
  sprite: 'obj',
};

const limits: FieldLimits = {
  min: {
    age: 0,
    money: 0,
    energy: 0,
    health: 0,
    power: 0,
    charm: 0,
    mood: 0,
  },
  max: {
    money: 10e12 - 1,
    health: 100,
    power: 100,
    charm: 100,
    mood: 100,
  },
};

const initializer = getInitializer<StoreState>('player', fields, limits);
const usePlayerStore = create(initializer);
export default usePlayerStore;
