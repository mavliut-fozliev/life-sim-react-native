export type Page = {
  title: string;
  pages?: Record<string, Page>;
  parentTitle?: string;
};
type PageStructure = Record<string, Page>;

const createPageStructure = <T extends Record<string, Page>>(structure: T) => structure;

export const pageStructure = createPageStructure({
  menu: {
    title: 'menu',
    pages: {
      menu_home: {
        title: 'menu_home',
        parentTitle: 'menu',
      },
      menu_startNewLife: {
        title: 'menu_startNewLife',
        parentTitle: 'menu',
      },
      menu_settings: {
        title: 'menu_settings',
        parentTitle: 'menu',
      },
    },
  },
  skeleton: {
    title: 'skeleton',
  },
});

export const findParentPage = (childKey: string, structure: PageStructure = pageStructure): Page | null => {
  for (const page of Object.values(structure)) {
    if (page.pages && page.pages[childKey]) {
      return page;
    }

    if (page.pages) {
      const parent = findParentPage(childKey, page.pages);
      if (parent) {
        return parent;
      }
    }
  }

  return null;
};

export enum PageNames {
  Menu = 'Menu',
  Home = 'Home',
  StartNewLife = 'StartNewLife',
  Settings = 'Settings',
}
