export type Navigation = {
  navigate: (pageName: string, props?: object) => void;
  goBack: () => void;
};
