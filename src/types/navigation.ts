import {RouteProp} from '@react-navigation/native';
import {ObjectRecord} from './common';

export type Navigation = {
  navigate: (pageName: string, props?: object) => void;
  goBack: () => void;
  getState: () => {routes: {name: string}[]};
  popToTop: () => void;
  pop: (pages: number) => void;
};

export type Route<T extends object> = RouteProp<ObjectRecord<T>>;
