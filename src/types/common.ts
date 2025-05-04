export type ObjectRecord<T> = Record<string, T>;

export type Chances<T> = {value: T; chance: number}[];

export type PopUpContent = {
  content: string;
};

export type History = {
  [age: string]: string[];
};
