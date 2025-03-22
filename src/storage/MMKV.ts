import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export type StorageTypes = string | object | number | boolean;

export enum DataTypes {
  STRING = 'string',
  OBJECT = 'object',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
}

export type TransformTypes = `${DataTypes}`;

export type SaveDataReturnType = true | undefined;
export type LoadDataReturnType<T> = T | undefined;
export type RemoveDataReturnType = true | undefined;
export type UpdateDataReturnType<T> = T | undefined;

export const saveData = (key: string, data: StorageTypes): SaveDataReturnType => {
  try {
    let transformedData = data;

    if (typeof transformedData === 'object') {
      transformedData = JSON.stringify(transformedData);
    }

    storage.set(key, transformedData);
    return true;
  } catch (error) {
    console.error('Error while saving. ', error);
  }
};

export const loadData = <T extends StorageTypes>(key: string, type?: TransformTypes): LoadDataReturnType<T> => {
  try {
    let data: any;

    if (type === DataTypes.NUMBER) {
      data = storage.getNumber(key);
    } else if (type === DataTypes.BOOLEAN) {
      data = storage.getBoolean(key);
    } else {
      data = storage.getString(key);
    }

    if (type === DataTypes.OBJECT && typeof data === DataTypes.STRING) {
      data = JSON.parse(data);
    }

    return data;
  } catch (error) {
    console.error('Error loading.', error);
  }
};

export const removeData = (key: string): RemoveDataReturnType => {
  try {
    storage.delete(key);
    return true;
  } catch (error) {
    console.error('Error while deleting.', error);
  }
};

export const updateData = <T extends StorageTypes>(
  key: string,
  transform: (oldData: T) => T,
  type?: TransformTypes,
): UpdateDataReturnType<T> => {
  try {
    const oldData = loadData<T>(key, type);
    if (oldData === undefined) {
      throw new Error('No data found.');
    }

    const newValue = transform(oldData);
    saveData(key, newValue);

    return newValue;
  } catch (error) {
    console.error('Error while changing.', error);
  }
};
