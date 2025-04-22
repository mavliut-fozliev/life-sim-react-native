import {create} from 'zustand';
import {ObjectField, StoreFields} from '../../../../../types/store';
import {getInitializer} from '../../../../../utils/storeHelpers';
import {FamilyPerson, Person, PlacePeople} from '../../../../../types/people';
import {ObjectRecord} from '../../../../../types/common';

type StoreState = ObjectField<'mother', FamilyPerson> &
  ObjectField<'father', FamilyPerson> &
  ObjectField<'people', ObjectRecord<Person>> &
  ObjectField<'placePeople', PlacePeople>;

const fields: StoreFields = {
  mother: 'obj',
  father: 'obj',
  people: 'obj',
  placePeople: 'obj',
};

const initializer = getInitializer<StoreState>('character', fields);
const useCharacterStore = create(initializer);
export default useCharacterStore;
