import {create} from 'zustand';
import {BooleanField, EnumField, StoreFields, StringField} from '../../../../../../types/store';
import {Countries} from '../../../../../../consts/countries';
import {Cities} from '../../../../../../consts/cities';
import {Gender} from '../../../../../../consts/gender';
import {getInitializer} from '../../../../../../utils/store/storeInitializer';

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
