import {create} from 'zustand';
import {getInitializer} from '../../../../../../utils/storeHelpers';
import {StoreFields, StringField} from '../../../../../../types/store';

type StoreState = StringField<'country' | 'city' | 'gender' | 'name' | 'surname'>;

const fields: StoreFields = {
  country: 'str',
  city: 'str',
  gender: 'str',
  name: 'str',
  surname: 'str',
};

const initializer = getInitializer<StoreState>('newLife', fields);
const useStore = create(initializer);
export default useStore;
