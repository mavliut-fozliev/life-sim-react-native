import {
  loadData,
  LoadDataReturnType,
  saveData,
  SaveDataReturnType,
} from './AsyncStorage';

type PlayerStore = {
  getName: () => LoadDataReturnType<string>;
  setName: (name: string) => SaveDataReturnType;
  getSurname: () => LoadDataReturnType<string>;
  setSurname: (surname: string) => SaveDataReturnType;
};

export const playerStore: PlayerStore = {
  getName: async () => loadData<string>('playerName'),
  setName: (name: string) => saveData('playerName', name),
  getSurname: async () => loadData<string>('playerSurname'),
  setSurname: (surname: string) => saveData('playerSurname', surname),
};
