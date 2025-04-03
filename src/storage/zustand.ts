import {create} from 'zustand';

interface Store {}

const useZustand = create<Store>(set => ({}));

export default useZustand;
