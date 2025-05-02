import {create} from 'zustand';
import {BooleanField, StoreFields} from '../../../../../types/store';
import {getInitializer} from '../../../../../utils/storeHelpers';

type StoreState = BooleanField<'showFullScreenAnimation'>;

const fields: StoreFields = {
  showFullScreenAnimation: 'bool',
};

const initializer = getInitializer<StoreState>('game', fields);
const useGameStore = create(initializer);
export default useGameStore;
