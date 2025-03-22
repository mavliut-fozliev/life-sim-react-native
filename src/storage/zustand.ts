import {create} from 'zustand';

interface Store {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export enum Pages {
  MENU = 'MENU',
  HOME = 'home',
}

const useZustand = create<Store>(set => ({
  currentPage: Pages.HOME,
  setCurrentPage: page => set(() => ({currentPage: page})),
}));

export default useZustand;
