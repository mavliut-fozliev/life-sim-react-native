import {create} from 'zustand';
import {getInitializer} from '../../../../../../utils/storeHelpers';
import {BooleanField, EnumField, StoreFields, StringField} from '../../../../../../types/store';
import {Countries} from '../../../../../../consts/countries';

type StoreState = StringField<'city' | 'name' | 'surname'> &
  EnumField<'country', Countries> &
  EnumField<'gender', 'Male' | 'Female'> &
  BooleanField<'nameIsModified' | 'surnameIsModified'>;

const fields: StoreFields = {
  country: 'str',
  city: 'str',
  gender: 'str',
  name: 'str',
  surname: 'str',
  nameIsModified: 'bool',
  surnameIsModified: 'bool',
};

const initializer = getInitializer<StoreState>('newLife', fields);
const useStore = create(initializer);
export default useStore;
