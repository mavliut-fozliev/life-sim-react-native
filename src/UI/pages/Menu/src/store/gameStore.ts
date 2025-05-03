import {create} from 'zustand';
import {NumberField, StoreFields} from '../../../../../types/store';
import {getInitializer} from '../../../../../utils/storeHelpers';

type StoreState = NumberField<'fullScreenAnimationIcon'>;

const fields: StoreFields = {
  fullScreenAnimationIcon: 'num',
};

const initializer = getInitializer<StoreState>('game', fields);
const useGameStore = create(initializer);
export default useGameStore;
