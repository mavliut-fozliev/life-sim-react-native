import {Dispatch, SetStateAction} from 'react';
import {
  DataTypes,
  loadData,
  LoadDataReturnType,
  saveData,
  SaveDataReturnType,
  StorageTypes,
  updateData,
  UpdateDataReturnType,
} from './MMKV';
import {DispatchNumber, DispatchString} from '../types/common';

type LoadedString = LoadDataReturnType<string>;
type LoadedNumber = LoadDataReturnType<number>;

type UpdatedNumber = UpdateDataReturnType<number>;

type StringStoreEntry = {
  get: () => LoadedString;
  set: (value: string, dispatch: DispatchString) => SaveDataReturnType;
};
type NumberStoreEntry = {
  get: () => LoadedNumber;
  set: (value: number, dispatch: DispatchNumber) => SaveDataReturnType;
  increase: (amount: number, dispatch: DispatchNumber) => UpdatedNumber;
  decrease: (amount: number, dispatch: DispatchNumber) => UpdatedNumber;
};

const setData = <T extends StorageTypes>(
  key: string,
  value: T,
  dispatch: Dispatch<SetStateAction<T>>,
): SaveDataReturnType => {
  const saved = saveData(key, value);
  if (saved) {
    dispatch(value);
  }
  return saved;
};

const updateNumericData = (
  key: string,
  modifier: (oldValue: number) => number,
  dispatch: DispatchNumber,
): UpdatedNumber => {
  const updatedValue = updateData<number>(key, modifier, DataTypes.NUMBER);
  if (updatedValue !== undefined) {
    dispatch(updatedValue);
  }
  return updatedValue;
};

const str = (key: string) =>
  ({
    get: () => loadData<string>(key),
    set: (value, dispatch) => setData(key, value, dispatch),
  } as StringStoreEntry);

const num = (key: string) =>
  ({
    get: () => loadData<number>(key),
    set: (value, dispatch) => setData(key, value, dispatch),
    increase: (amount, dispatch) => updateNumericData(key, oldValue => oldValue + amount, dispatch),
    decrease: (amount, dispatch) => updateNumericData(key, oldValue => oldValue - amount, dispatch),
  } as NumberStoreEntry);

// const bool = (key: string) => ({});

// const obj = (key: string) => ({});

export const playerStore = {
  name: str('playerName'),
  surname: str('playerSurname'),
  country: str('playerCountry'),
  city: str('playerCity'),
  gender: str('playerGender'),
  money: num('playerMoney'),
  energy: num('playerEnergy'),
  health: num('playerHealth'),
  power: num('playerPower'),
};

export const settingsStore = {
  language: str('settingsLanguage'),
};

export const newLifeStore = {
  country: str('newLifeCountry'),
  city: str('newLifeCity'),
  gender: str('newLifeGender'),
  name: str('newLifeName'),
  surname: str('newLifeSurname'),
};
