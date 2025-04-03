import {create} from 'zustand';
import {settingsStore} from './store';

interface Store {
  language: string;
  setLanguage: (v: string) => void;
}

const useZustand = create<Store>(set => ({
  language: settingsStore.language.get() || 'en',
  setLanguage: v => set({language: v}),
}));

export default useZustand;
