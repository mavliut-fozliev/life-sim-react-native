import {FieldLimits, StoreFields} from '../../types/store';
import {arr, bool, num, obj, str} from './MMKV';

export const mmkvKeyMethod = (mmkvKey: string) => (key: string) => mmkvKey + key;
export const getMethodsKey = (key: string) => '$' + key;

export const getInitializer = <T>(mmkvKey: string, fields: StoreFields, limits?: FieldLimits) => {
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
          const max = limits?.max[key];
          if (max !== undefined && value > max) {
            num.save(getMMKVKey(key), max);
            return {[key]: max};
          }
          const min = limits?.min[key];
          if (min !== undefined && value < min) {
            num.save(getMMKVKey(key), min);
            return {[key]: min};
          }
          num.save(getMMKVKey(key), value);
          return {[key]: value};
        });
      },
      increase: (value: number) => {
        set((state: any) => {
          const newValue = state[key] + value;
          const max = limits?.max[key];
          if (max !== undefined && newValue > max) {
            num.save(getMMKVKey(key), max);
            return {[key]: max};
          }
          num.save(getMMKVKey(key), newValue);
          return {[key]: newValue};
        });
      },
      decrease: (value: number) => {
        set((state: any) => {
          const newValue = state[key] - value;
          const min = limits?.min[key];
          if (min !== undefined && newValue < min) {
            num.save(getMMKVKey(key), min);
            return {[key]: min};
          }
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
      updateByKeys: (parameters: {itemKeys: string[]; value: any; min?: number; max?: number}[]) => {
        set((state: any) => {
          const newState = state[key];
          parameters.forEach(({itemKeys, value, min, max}) => {
            if (max !== undefined && value > max) {
              value = max;
            }
            if (min !== undefined && value < min) {
              value = min;
            }
            setValue(newState, itemKeys, value);
          });
          obj.save(getMMKVKey(key), newState);
          return {[key]: newState};
        });
      },
    },
  });

  const addArr = (key: string, set: any) => ({
    [key]: arr.load(getMMKVKey(key)),
    [getMethodsKey(key)]: {
      set: (value: object) => {
        set(() => {
          arr.save(getMMKVKey(key), value);
          return {[key]: value};
        });
      },
      delete: (comparisonObject: Record<string, any>) => {
        set((state: any) => {
          const newState = state[key].filter((item: any) => {
            return !Object.keys(comparisonObject).every(prop => {
              return item[prop] === comparisonObject[prop];
            });
          });
          arr.save(getMMKVKey(key), newState);
          return {[key]: newState};
        });
      },
      add: (item: Record<string, any>) => {
        set((state: any) => {
          const newState = [...state[key], item];
          arr.save(getMMKVKey(key), newState);
          return {[key]: newState};
        });
      },
      update: (
        comparisonObject: Record<string, any> | Record<string, any>[],
        newObject: Record<string, any>,
        shouldReplace?: boolean,
      ) => {
        let wasFound = false;
        set((state: any) => {
          const newState = state[key].map((item: any) => {
            const comparisonObjects = Array.isArray(comparisonObject) ? comparisonObject : [comparisonObject];
            const shouldUpdate = comparisonObjects.some(compObj =>
              Object.keys(compObj).every(prop => item[prop] === compObj[prop]),
            );
            if (shouldUpdate) {
              wasFound = true;
            }
            return shouldUpdate ? (shouldReplace ? newObject : {...item, ...newObject}) : item;
          });
          arr.save(getMMKVKey(key), newState);
          return {[key]: newState};
        });
        return wasFound;
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
        case 'arr':
          return Object.assign(acc, addArr(key, set));
      }
    }, {}) as T;
  };
};

function setValue(object: any, keys: string[], value: any) {
  let current = object;
  keys.slice(0, -1).forEach(key => {
    if (!(key in current) || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  });
  current[keys[keys.length - 1]] = value;
}
