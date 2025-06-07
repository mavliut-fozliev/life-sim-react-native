import {create} from 'zustand';
import {ArrayField, ObjectField, StoreFields} from '../types/store';
import {PeopleConnection, Person, PlacePeople} from '../types/people';
import {ObjectRecord} from '../types/common';
import {getInitializer} from '../utils/store/storeInitializer';

type StoreState = ObjectField<'people', ObjectRecord<Person>> &
  ArrayField<'peopleConnections', PeopleConnection> &
  ObjectField<'placePeople', PlacePeople>;

const fields: StoreFields = {
  people: 'obj',
  peopleConnections: 'arr',
  placePeople: 'obj',
};

const initializer = getInitializer<StoreState>('character', fields);
const useCharacterStore = create(initializer);
export default useCharacterStore;
