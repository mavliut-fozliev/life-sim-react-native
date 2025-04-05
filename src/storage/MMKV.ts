import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export namespace str {
  export const save = (key: string, value: string) => {
    try {
      storage.set(key, value);
    } catch (error) {
      console.error(`Error while saving ${key}`, error);
    }
  };

  export const load = (key: string): string => {
    let data = '';
    try {
      data = storage.getString(key) ?? '';
    } catch (error) {
      console.error(`Error while loading ${key}`, error);
    } finally {
      return data;
    }
  };
}

export namespace num {
  export const save = (key: string, value: number) => {
    try {
      storage.set(key, value);
    } catch (error) {
      console.error(`Error while saving ${key}`, error);
    }
  };

  export const load = (key: string): number => {
    let data = 0;
    try {
      data = storage.getNumber(key) ?? 0;
    } catch (error) {
      console.error(`Error while loading ${key}`, error);
    } finally {
      return data;
    }
  };
}

export namespace bool {
  export const save = (key: string, value: boolean) => {
    try {
      storage.set(key, value);
    } catch (error) {
      console.error(`Error while saving ${key}`, error);
    }
  };

  export const load = (key: string): boolean => {
    let data = false;
    try {
      data = storage.getBoolean(key) ?? false;
    } catch (error) {
      console.error(`Error while loading ${key}`, error);
    } finally {
      return data;
    }
  };
}

export namespace obj {
  export const save = <T extends object>(key: string, value: T) => {
    try {
      const stirngValue = JSON.stringify(value);
      storage.set(key, stirngValue);
    } catch (error) {
      console.error(`Error while saving ${key}`, error);
    }
  };

  export const load = <T extends object>(key: string): Partial<T> => {
    let data = {};
    try {
      const loaded = storage.getString(key) ?? '{}';
      data = JSON.parse(loaded);
    } catch (error) {
      console.error(`Error while loading ${key}`, error);
    } finally {
      return data;
    }
  };
}
