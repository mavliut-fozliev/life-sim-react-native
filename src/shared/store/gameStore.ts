import {create} from 'zustand';
import {BooleanField, EnumField, NumberField, ObjectField, StoreFields, StringField} from '../types/store';
import {getInitializer} from '../utils/store/storeInitializer';
import {Language} from '../types/language';

type StoreState = StringField<'language' | 'currentPage'> &
  BooleanField<'gameInProgress'> &
  EnumField<'language', Language> &
  NumberField<'fullScreenAnimationIcon'> &
  ObjectField<'popUpContent', PopUpContent> &
  ObjectField<'history', History>;

const fields: StoreFields = {
  language: 'str',
  gameInProgress: 'bool',
  currentPage: 'str',
  fullScreenAnimationIcon: 'num',
  popUpContent: 'obj',
  history: 'obj',
};

const initializer = getInitializer<StoreState>('game', fields);
const useGameStore = create(initializer);
export default useGameStore;

type PopUpContent = {
  content: string;
};

type History = {
  [age: string]: string[];
};
