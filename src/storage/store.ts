import {create} from 'zustand';
import {Locale} from '../types/localizedText';
import {ObjectField, StoreFields, StringField} from '../types/store';
import {getInitializer} from '../utils/storeHelpers';

type StoreState = StringField<'language'> & ObjectField<'localizedText', Locale>;

const fields: StoreFields = {
  language: 'str',
  localizedText: 'obj',
};

const initializer = getInitializer<StoreState>('settings', fields);
const useGlobalStore = create(initializer);
export default useGlobalStore;
