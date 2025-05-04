import {create} from 'zustand';
import {NumberField, ObjectField, StoreFields} from '../../../../../types/store';
import {getInitializer} from '../../../../../utils/storeInitializer';
import {History, PopUpContent} from '../../../../../types/common';

type StoreState = NumberField<'fullScreenAnimationIcon'> &
  ObjectField<'popUpContent', PopUpContent> &
  ObjectField<'history', History>;

const fields: StoreFields = {
  fullScreenAnimationIcon: 'num',
  popUpContent: 'obj',
  history: 'obj',
};

const initializer = getInitializer<StoreState>('game', fields);
const useGameStore = create(initializer);
export default useGameStore;
