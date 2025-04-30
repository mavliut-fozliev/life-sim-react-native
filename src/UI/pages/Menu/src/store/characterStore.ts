import {create} from 'zustand';
import {ObjectField, StoreFields} from '../../../../../types/store';
import {getInitializer} from '../../../../../utils/storeHelpers';
import {Person, PlacePeople} from '../../../../../types/people';
import {ObjectRecord} from '../../../../../types/common';

type StoreState = ObjectField<'people', ObjectRecord<Person>> & ObjectField<'placePeople', PlacePeople>;

const fields: StoreFields = {
  people: 'obj',
  placePeople: 'obj',
};

const initializer = getInitializer<StoreState>('character', fields);
const useCharacterStore = create(initializer);
export default useCharacterStore;
