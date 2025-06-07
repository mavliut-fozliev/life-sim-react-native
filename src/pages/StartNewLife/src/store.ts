import {create} from 'zustand';
import {BooleanField, EnumField, StoreFields, StringField} from '../../../shared/types/store';
import {Countries} from '../../../shared/constants/countries';
import {Cities} from '../../../shared/constants/cities';
import {Gender} from '../../../shared/constants/gender';
import {getInitializer} from '../../../shared/utils/store/storeInitializer';

type StoreState = StringField<'name' | 'surname'> &
  EnumField<'country', Countries> &
  EnumField<'city', Cities> &
  EnumField<'gender', Gender> &
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
