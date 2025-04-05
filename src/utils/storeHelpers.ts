import {bool, num, obj, str} from '../storage/MMKV';
import {StoreFields} from '../types/store';

export const mmkvKeyMethod = (mmkvKey: string) => (key: string) => mmkvKey + key;
export const getMethodsKey = (key: string) => '$' + key;

export const getInitializer = <T>(mmkvKey: string, fields: StoreFields) => {
  const getMMKVKey = mmkvKeyMethod(mmkvKey);

  const addStr = (key: string, set: any) => ({
    [key]: str.load(getMMKVKey(key)),
    [getMethodsKey(key)]: {
      set: (value: string) => {
        set(() => {
          str.save(getMMKVKey(key), value);
          return {[key]: value};
        });
      },
    },
  });

  const addNum = (key: string, set: any) => ({
    [key]: num.load(getMMKVKey(key)),
    [getMethodsKey(key)]: {
      set: (value: number) => {
        set(() => {
          num.save(getMMKVKey(key), value);
          return {[key]: value};
        });
      },
      increase: (value: number) => {
        set((state: any) => {
          const newValue = state[key] + value;
          num.save(getMMKVKey(key), newValue);
          return {[key]: newValue};
        });
      },
      decrease: (value: number) => {
        set((state: any) => {
          const newValue = state[key] - value;
          num.save(getMMKVKey(key), newValue);
          return {[key]: newValue};
        });
      },
    },
  });

  const addBool = (key: string, set: any) => ({
    [key]: bool.load(getMMKVKey(key)),
    [getMethodsKey(key)]: {
      set: (value: boolean) => {
        set(() => {
          bool.save(getMMKVKey(key), value);
          return {[key]: value};
        });
      },
    },
  });

  const addObj = (key: string, set: any) => ({
    [key]: obj.load(getMMKVKey(key)),
    [getMethodsKey(key)]: {
      set: (value: object) => {
        set(() => {
          obj.save(getMMKVKey(key), value);
          return {[key]: value};
        });
      },
    },
  });

  return (set: any) => {
    return Object.entries(fields).reduce((acc, [key, type]) => {
      switch (type) {
        case 'str':
          return Object.assign(acc, addStr(key, set));
        case 'num':
          return Object.assign(acc, addNum(key, set));
        case 'bool':
          return Object.assign(acc, addBool(key, set));
        case 'obj':
          return Object.assign(acc, addObj(key, set));
      }
    }, {}) as T;
  };
};
