import useGameStore from './gameStore';
import usePlayerStore from './playerStore';

export function useStoreHooks() {
  const gameStore = useGameStore();
  const playerStore = usePlayerStore();

  function addToHistory(historyItem: string | undefined) {
    if (!historyItem) {
      return;
    }

    const age = String(playerStore.age);
    const prev = gameStore.history[age] || [];

    gameStore.$history.updateByKeys([{itemKeys: [age], value: [...prev, historyItem]}]);
  }

  return {addToHistory};
}
