import {create} from 'zustand';
import {BooleanField, ObjectField, StoreFields, StringField} from '../types/store';
import {getInitializer} from '../utils/storeHelpers';
import ru from '../locales/ru';

type StoreState = StringField<'language' | 'currentPage'> &
  ObjectField<'localizedText', typeof ru> &
  BooleanField<'gameInProgress'>;

const fields: StoreFields = {
  language: 'str',
  localizedText: 'obj',
  gameInProgress: 'bool',
  currentPage: 'str',
};

const initializer = getInitializer<StoreState>('settings', fields);
const useGlobalStore = create(initializer);
export default useGlobalStore;
