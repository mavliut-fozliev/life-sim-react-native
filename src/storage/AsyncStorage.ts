import AsyncStorage from '@react-native-async-storage/async-storage';

type StorageTypes = string | object | number | boolean;
type TransformTypes = 'string' | 'object' | 'number' | 'boolean';

export type SaveDataReturnType = Promise<true | undefined>;
export type LoadDataReturnType<T> = Promise<T | null | undefined>;
export type RemoveDataReturnType = Promise<true | undefined>;
export type UpdateDataReturnType<T> = Promise<T | undefined>;

export const saveData = async (
  key: string,
  data: StorageTypes,
): SaveDataReturnType => {
  try {
    let transformedData = data;

    if (typeof transformedData === 'object') {
      transformedData = JSON.stringify(transformedData);
    } else if (typeof transformedData === 'number') {
      transformedData = transformedData.toString();
    } else if (typeof transformedData === 'boolean') {
      transformedData = transformedData ? 'true' : 'false';
    }

    await AsyncStorage.setItem(key, transformedData);
    return true;
  } catch (error) {
    console.error('Ошибка при сохранении. ', error);
  }
};

export const loadData = async <T extends StorageTypes>(
  key: string,
  type?: TransformTypes,
): LoadDataReturnType<T> => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (!data) {
      return null;
    }

    let transformedData: any = data;

    if (type === 'object') {
      transformedData = JSON.parse(transformedData);
    } else if (type === 'number') {
      transformedData = Number(transformedData);
    } else if (type === 'boolean') {
      transformedData = transformedData === 'true';
    }

    return transformedData;
  } catch (error) {
    console.error('Ошибка при загрузке.', error);
  }
};

export const removeData = async (key: string): RemoveDataReturnType => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Ошибка при удалении.', error);
  }
};

export const updateData = async <T extends StorageTypes>(
  key: string,
  transform: (oldData: T) => T,
  type?: TransformTypes,
): UpdateDataReturnType<T> => {
  try {
    const oldData = await loadData<T>(key, type);
    if (oldData === null || oldData === undefined) {
      throw new Error('Данные не найдены.');
    }

    const newValue = transform(oldData);
    await saveData(key, newValue);

    return newValue;
  } catch (error) {
    console.error('Ошибка при изменении.', error);
  }
};
