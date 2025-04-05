export type Navigation = {
  navigate: (pageName: string, props?: object) => void;
  goBack: () => void;
  getState: () => {routes: {name: string}[]};
  popToTop: () => void;
};
