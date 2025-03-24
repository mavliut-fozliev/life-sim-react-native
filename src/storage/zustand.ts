import {create} from 'zustand';
import {Page, pageStructure} from '../consts/pages';

// type NewLifeProps = {
//   name: string;
//   surname: string;
//   gender: string;
//   country: string;
//   city: string;
// };

interface Store {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const useZustand = create<Store>(set => ({
  currentPage: pageStructure.menu,
  setCurrentPage: page => set({currentPage: page}),
}));

export default useZustand;
