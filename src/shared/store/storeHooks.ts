import useGameStore from './gameStore';
import usePlayerStore from './playerStore';

export function useStoreHooks() {
  const gameStore = useGameStore();
  const playerStore = usePlayerStore();

  function addAgeToHistory() {
    const age = String(playerStore.person.age + 1);
    gameStore.$history.updateByKeys([{itemKeys: [age], value: []}]);
  }

  function addItemToHistory(historyItem: string | undefined) {
    if (!historyItem) {
      return;
    }

    const age = String(playerStore.person.age);
    const prev = gameStore.history[age] || [];

    gameStore.$history.updateByKeys([{itemKeys: [age], value: [...prev, historyItem]}]);
  }

  return {addAgeToHistory, addItemToHistory};
}
