import {Dispatch, SetStateAction} from 'react';

export type ObjectRecord<T> = Record<string, T>;

export type DispatchString = Dispatch<SetStateAction<string>>;
export type DispatchNumber = Dispatch<SetStateAction<number>>;
