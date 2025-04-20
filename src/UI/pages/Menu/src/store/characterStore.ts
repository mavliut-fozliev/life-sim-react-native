import {create} from 'zustand';
import {ObjectField, StoreFields} from '../../../../../types/store';
import {getInitializer} from '../../../../../utils/storeHelpers';
import {FamilyPerson, PlacePeople} from '../../../../../types/people';

type StoreState = ObjectField<'mother', FamilyPerson> &
  ObjectField<'father', FamilyPerson> &
  ObjectField<'people', PlacePeople>;

const fields: StoreFields = {
  mother: 'obj',
  father: 'obj',
  people: 'obj',
};

const initializer = getInitializer<StoreState>('character', fields);
const useCharacterStore = create(initializer);
export default useCharacterStore;
