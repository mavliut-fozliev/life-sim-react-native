import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

type StorageTypes = string | object | number | boolean;
type TransformTypes = 'string' | 'object' | 'number' | 'boolean';

export type SaveDataReturnType = true | undefined;
export type LoadDataReturnType<T> = T | undefined;
export type RemoveDataReturnType = true | undefined;
export type UpdateDataReturnType<T> = T | undefined;

export const saveData = (
  key: string,
  data: StorageTypes,
): SaveDataReturnType => {
  try {
    let transformedData = data;

    if (typeof transformedData === 'object') {
      transformedData = JSON.stringify(transformedData);
    }

    storage.set(key, transformedData);
    return true;
  } catch (error) {
    console.error('Ошибка при сохранении. ', error);
  }
};

export const loadData = <T extends StorageTypes>(
  key: string,
  type?: TransformTypes,
): LoadDataReturnType<T> => {
  try {
    let data: any;

    if (type === 'number') {
      data = storage.getNumber(key);
    } else if (type === 'boolean') {
      data = storage.getBoolean(key);
    } else {
      data = storage.getString(key);
    }

    if (type === 'object' && typeof data === 'string') {
      data = JSON.parse(data);
    }

    return data;
  } catch (error) {
    console.error('Ошибка при загрузке.', error);
  }
};

export const removeData = (key: string): RemoveDataReturnType => {
  try {
    storage.delete(key);
    return true;
  } catch (error) {
    console.error('Ошибка при удалении.', error);
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
      throw new Error('Данные не найдены.');
    }

    const newValue = transform(oldData);
    saveData(key, newValue);

    return newValue;
  } catch (error) {
    console.error('Ошибка при изменении.', error);
  }
};
