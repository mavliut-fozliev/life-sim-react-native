import {create} from 'zustand';
import {NumberField, ObjectField, StoreFields} from '../../../../../types/store';
import {getInitializer} from '../../../../../utils/storeHelpers';
import {PopUpContent} from '../../../../../types/common';

type StoreState = NumberField<'fullScreenAnimationIcon'> & ObjectField<'popUpContent', PopUpContent>;

const fields: StoreFields = {
  fullScreenAnimationIcon: 'num',
  popUpContent: 'obj',
};

const initializer = getInitializer<StoreState>('game', fields);
const useGameStore = create(initializer);
export default useGameStore;
