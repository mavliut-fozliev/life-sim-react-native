import {create} from 'zustand';
import {ObjectField, StoreFields} from '../../../../../types/store';
import {Person, PlacePeople} from '../../../../../types/people';
import {ObjectRecord} from '../../../../../types/common';
import {getInitializer} from '../../../../../utils/store/storeInitializer';

type StoreState = ObjectField<'people', ObjectRecord<Person>> & ObjectField<'placePeople', PlacePeople>;

const fields: StoreFields = {
  people: 'obj',
  placePeople: 'obj',
};

const initializer = getInitializer<StoreState>('character', fields);
const useCharacterStore = create(initializer);
export default useCharacterStore;
