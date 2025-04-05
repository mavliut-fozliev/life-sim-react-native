import {ObjectRecord} from './common';

export type StringField<T extends string> = {
  [K in T]: string;
} & {
  [K in `$${T}`]: {
    set: (value: string) => void;
  };
};

export type NumberField<T extends string> = {
  [K in T]: number;
} & {
  [K in `$${T}`]: {
    set: (value: number) => void;
    increase: (value: number) => void;
    decrease: (value: number) => void;
  };
};

export type BooleanField<T extends string> = {
  [K in T]: boolean;
} & {
  [K in `$${T}`]: {
    set: (value: boolean) => void;
  };
};

export type ObjectField<T extends string, V extends object> = {
  [K in T]: V;
} & {
  [K in `$${T}`]: {
    set: (value: V) => void;
  };
};

export type StoreFields = ObjectRecord<'str' | 'num' | 'bool' | 'obj'>;
