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

type DispatchString = Dispatch<SetStateAction<string>>;
type DispatchNumber = Dispatch<SetStateAction<number>>;

type LoadedString = LoadDataReturnType<string>;
type LoadedNumber = LoadDataReturnType<number>;

type UpdatedNumber = UpdateDataReturnType<number>;

type PlayerStore = {
  getName: () => LoadedString;
  setName: (name: string, dispatch: DispatchString) => SaveDataReturnType;
  getSurname: () => LoadedString;
  setSurname: (surname: string, dispatch: DispatchString) => SaveDataReturnType;

  getMoney: () => LoadedNumber;
  setMoney: (amount: number, dispatch: DispatchNumber) => SaveDataReturnType;
  increaseMoney: (amount: number, dispatch: DispatchNumber) => UpdatedNumber;
  decreaseMoney: (amount: number, dispatch: DispatchNumber) => UpdatedNumber;

  getEnergy: () => LoadedNumber;
  setEnergy: (amount: number, dispatch: DispatchNumber) => SaveDataReturnType;
};

const keys = {
  name: 'playerName',
  surname: 'playerSurname',
  money: 'playerMoney',
  energy: 'playerEnergy',
};

const setData = <T extends StorageTypes>(
  key: string,
  value: T,
  dispatch: Dispatch<SetStateAction<T>>,
): SaveDataReturnType => {
  const saved = saveData(key, value);
  if (saved !== undefined) {
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

export const playerStore: PlayerStore = {
  getName: () => loadData<string>(keys.name),
  setName: (name, dispatch) => setData(keys.name, name, dispatch),

  getSurname: () => loadData<string>(keys.surname),
  setSurname: (surname, dispatch) => setData(keys.surname, surname, dispatch),

  getMoney: () => loadData<number>(keys.money, DataTypes.NUMBER),
  setMoney: (amount, dispatch) => setData(keys.money, amount, dispatch),

  increaseMoney: (amount, dispatch) =>
    updateNumericData(keys.money, oldMoney => oldMoney + amount, dispatch),

  decreaseMoney: (amount, dispatch) =>
    updateNumericData(keys.money, oldMoney => oldMoney - amount, dispatch),

  getEnergy: () => loadData<number>(keys.energy, DataTypes.NUMBER),
  setEnergy: (amount, dispatch) => setData(keys.energy, amount, dispatch),
};
