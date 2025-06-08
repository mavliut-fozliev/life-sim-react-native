import useCharacterStore from '../../../shared/store/characterStore';
import {Person} from '../../../shared/types/people';
import {playerId} from '../player';

export function usePlayer(): Person {
  const characterStore = useCharacterStore();
  return characterStore.people[playerId] || {};
}
