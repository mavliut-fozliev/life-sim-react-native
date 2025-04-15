import useGlobalStore from '../storage/store';

export function useInitialStoreValues() {
  const {language, $language} = useGlobalStore();

  return () => {
    if (!language) {
      $language.set('en');
    }
  };
}
