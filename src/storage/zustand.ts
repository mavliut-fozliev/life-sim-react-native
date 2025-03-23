import {create} from 'zustand';
import {Page, pageStructure} from '../consts/pages';

type NewLifeProps = {
  name: string;
  surname: string;
  gender: string;
  country: string;
  city: string;
};

interface Store {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  newLifeProps: NewLifeProps;
  setNewLifeProps: (newLifeProps: NewLifeProps) => void;
}

const defaultNewLifeProps = {
  name: '',
  surname: '',
  gender: '',
  country: '',
  city: '',
};

const useZustand = create<Store>(set => ({
  currentPage: pageStructure.menu,
  setCurrentPage: page => set(() => ({currentPage: page})),
  newLifeProps: defaultNewLifeProps,
  setNewLifeProps: newLifeProps => set(() => ({newLifeProps})),
}));

export default useZustand;
