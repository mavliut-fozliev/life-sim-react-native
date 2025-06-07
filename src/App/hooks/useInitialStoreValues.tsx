import useGameStore from '../../shared/store/gameStore';

export function useInitialStoreValues() {
  const {language, $language} = useGameStore();

  return () => {
    if (!language) {
      $language.set('en');
    }
  };
}
