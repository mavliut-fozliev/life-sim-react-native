import {create} from 'zustand';
import {Locale} from '../types/localizedText';
import {ObjectField, StoreFields} from '../types/store';
import {getInitializer} from '../utils/storeHelpers';

type StoreState = ObjectField<'localizedText', Locale>;

const fields: StoreFields = {
  localizedText: 'obj',
};

const initializer = getInitializer<StoreState>('settings', fields);
const useGlobalStore = create(initializer);
export default useGlobalStore;
