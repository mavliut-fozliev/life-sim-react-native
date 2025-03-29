import {Dispatch, SetStateAction} from 'react';
import {
  DataTypes,
  loadData,
  LoadDataReturnType,
  saveData,
  SaveDataReturnType,
  StorageTypes,
  TransformTypes,
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

function createStoreEntry(key: string, type: TransformTypes) {
  switch (type) {
    case DataTypes.NUMBER:
      return {
        get: () => loadData<number>(key),
        set: (value, dispatch) => setData(key, value, dispatch),
        increase: (amount, dispatch) => updateNumericData(key, oldValue => oldValue + amount, dispatch),
        decrease: (amount, dispatch) => updateNumericData(key, oldValue => oldValue - amount, dispatch),
      } as NumberStoreEntry;
    case DataTypes.BOOLEAN:
      return {};
    case DataTypes.OBJECT:
      return {};
    default:
      return {
        get: () => loadData<string>(key),
        set: (value, dispatch) => setData(key, value, dispatch),
      } as StringStoreEntry;
  }
}

export const playerStore = {
  name: createStoreEntry('playerName', DataTypes.STRING) as StringStoreEntry,
  surname: createStoreEntry('playerSurname', DataTypes.STRING) as StringStoreEntry,
  money: createStoreEntry('playerMoney', DataTypes.NUMBER) as NumberStoreEntry,
  energy: createStoreEntry('playerEnergy', DataTypes.NUMBER) as NumberStoreEntry,
  health: createStoreEntry('playerHealth', DataTypes.NUMBER) as NumberStoreEntry,
  power: createStoreEntry('playerPower', DataTypes.NUMBER) as NumberStoreEntry,
};

export const settingsStore = {
  language: createStoreEntry('settingsLanguage', DataTypes.STRING) as StringStoreEntry,
};

export const newLifeStore = {
  country: createStoreEntry('newLifeCountry', DataTypes.STRING) as StringStoreEntry,
  city: createStoreEntry('newLifeCity', DataTypes.STRING) as StringStoreEntry,
  gender: createStoreEntry('newLifeGender', DataTypes.STRING) as StringStoreEntry,
  name: createStoreEntry('newLifeName', DataTypes.STRING) as StringStoreEntry,
  surname: createStoreEntry('newLifeSurname', DataTypes.STRING) as StringStoreEntry,
};
