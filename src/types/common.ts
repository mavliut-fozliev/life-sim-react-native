import {Dispatch, SetStateAction} from 'react';

export type ObjectRecord<T> = Record<string, T>;

export type DispatchString = Dispatch<SetStateAction<string>>;
export type DispatchNumber = Dispatch<SetStateAction<number>>;

export type SetZustandState<T> = (value: T) => void;

export type SetZustandString = (value: string) => void;
export type SetZustandNumber = (value: number) => void;
