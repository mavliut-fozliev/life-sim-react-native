import {create} from 'zustand';
import {BooleanField, EnumField, StoreFields, StringField} from '../types/store';
import {Language} from '../types/language';
import {getInitializer} from '../utils/store/storeInitializer';

type StoreState = StringField<'language' | 'currentPage'> &
  BooleanField<'gameInProgress'> &
  EnumField<'language', Language>;

const fields: StoreFields = {
  language: 'str',
  gameInProgress: 'bool',
  currentPage: 'str',
};

const initializer = getInitializer<StoreState>('settings', fields);
const useGlobalStore = create(initializer);
export default useGlobalStore;
