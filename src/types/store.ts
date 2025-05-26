import {ObjectRecord} from './common';

export type StringField<T extends string> = {
  [K in T]: string;
} & {
  [K in `$${T}`]: {
    set: (value: string) => void;
  };
};

export type EnumField<T extends string, V extends string> = {
  [K in T]: V;
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
    updateByKeys: (parameters: UpdateByKeysParams) => void;
  };
};

export type ArrayField<T extends string, V extends object> = {
  [K in T]: Array<V>;
} & {
  [K in `$${T}`]: {
    set: (value: V) => void;
    delete: (comparisonObject: Partial<V>) => void;
    add: (item: V) => void;
    update: (comparisonObject: Partial<V> | Array<Partial<V>>, newObject: V, shouldReplace?: boolean) => boolean;
  };
};

export type StoreFields = ObjectRecord<'str' | 'num' | 'bool' | 'obj' | 'arr'>;

export type FieldLimits = {min: ObjectRecord<number>; max: ObjectRecord<number>};

export type UpdateByKeysParams = Array<{itemKeys: string[]; value: any; min?: number; max?: number}>;
