import {create} from 'zustand';
import {ObjectField, StoreFields} from '../types/store';
import {Person} from '../types/people';
import {getInitializer} from '../utils/store/storeInitializer';

type StoreState = ObjectField<'person', Person>;

const fields: StoreFields = {
  person: 'obj',
};

// const limits: FieldLimits = {
//   min: {
//     age: 0,
//     money: 0,
//     energy: 0,
//     health: 0,
//     power: 0,
//     charm: 0,
//     mood: 0,
//   },
//   max: {
//     money: 10e12 - 1,
//     health: 100,
//     power: 100,
//     charm: 100,
//     mood: 100,
//   },
// };

const initializer = getInitializer<StoreState>('player', fields);
const usePlayerStore = create(initializer);
export default usePlayerStore;
