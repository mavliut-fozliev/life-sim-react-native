import {create} from 'zustand';
import {Locale} from '../types/localizedText';
import {BooleanField, ObjectField, StoreFields, StringField} from '../types/store';
import {getInitializer} from '../utils/storeHelpers';

type StoreState = StringField<'language'> & ObjectField<'localizedText', Locale> & BooleanField<'gameInProgress'>;

const fields: StoreFields = {
  language: 'str',
  localizedText: 'obj',
  gameInProgress: 'bool',
};

const initializer = getInitializer<StoreState>('settings', fields);
const useGlobalStore = create(initializer);
export default useGlobalStore;
