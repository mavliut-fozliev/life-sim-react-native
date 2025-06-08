import {usePlayer} from '../../features/character/hooks/usePlayer';
import useGameStore from './gameStore';

export function useStoreHooks() {
  const gameStore = useGameStore();
  const player = usePlayer();

  function addAgeToHistory() {
    const age = String(player.age + 1);
    gameStore.$history.updateByKeys([{itemKeys: [age], value: []}]);
  }

  function addItemToHistory(historyItem: string | undefined) {
    if (!historyItem) {
      return;
    }

    const age = String(player.age);
    const prev = gameStore.history[age] || [];

    gameStore.$history.updateByKeys([{itemKeys: [age], value: [...prev, historyItem]}]);
  }

  return {addAgeToHistory, addItemToHistory};
}
