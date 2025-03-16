import {Dispatch, SetStateAction} from 'react';
import {
  loadData,
  LoadDataReturnType,
  saveData,
  SaveDataReturnType,
  updateData,
  UpdateDataReturnType,
} from './MMKV';

type PlayerStore = {
  getName: () => LoadDataReturnType<string>;
  setName: (name: string) => SaveDataReturnType;
  getSurname: () => LoadDataReturnType<string>;
  setSurname: (surname: string) => SaveDataReturnType;

  getMoney: () => LoadDataReturnType<number>;
  setMoney: (amount: number) => SaveDataReturnType;
  increaseMoney: (
    amount: number,
    dispatch: Dispatch<SetStateAction<number>>,
  ) => UpdateDataReturnType<number>;
  decreaseMoney: (
    amount: number,
    dispatch: Dispatch<SetStateAction<number>>,
  ) => UpdateDataReturnType<number>;
};

export const playerStore: PlayerStore = {
  getName: () => loadData<string>('playerName'),
  setName: name => saveData('playerName', name),
  getSurname: () => loadData<string>('playerSurname'),
  setSurname: surname => saveData('playerSurname', surname),

  getMoney: () => loadData<number>('playerMoney', 'number'),
  setMoney: amount => saveData('playerMoney', amount),
  increaseMoney: (amount, dispatch) => {
    const updatedMoney = updateData<number>(
      'playerMoney',
      oldMoney => oldMoney + amount,
      'number',
    );

    if (updatedMoney) {
      dispatch(updatedMoney);
    }
    return updatedMoney;
  },
  decreaseMoney: (amount, dispatch) => {
    const updatedMoney = updateData<number>(
      'playerMoney',
      oldMoney => oldMoney - amount,
      'number',
    );

    if (updatedMoney) {
      dispatch(updatedMoney);
    }

    return updatedMoney;
  },
};
