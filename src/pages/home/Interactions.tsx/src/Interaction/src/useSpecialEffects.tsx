import {PeopleConnection, PeopleInteraction} from '../../../../../../shared/types/people';
import {getRandomValue} from '../../../../../../shared/utils/common';
import {SpecialEffect} from '../../../../../../features/character/interactions/common';
import {PeopleRole} from '../../../../../../features/character/characterProps';
import {usePlayer} from '../../../../../../features/character/hooks/usePlayer';
import useCharacterStore from '../../../../../../shared/store/characterStore';
import {playerId} from '../../../../../../features/character/player';

type ConnectionUpdate = {key: keyof PeopleConnection; value: string | number};

export function useSpecialEffects(interaction: PeopleInteraction) {
  const player = usePlayer();
  const characterStore = useCharacterStore();

  return (): {connectionUpdates: ConnectionUpdate[]} | undefined => {
    if (!interaction.specialEffects) {
      return;
    }

    let connectionUpdates: ConnectionUpdate[] = [];

    interaction.specialEffects.forEach(effect => {
      switch (effect) {
        case SpecialEffect.GetMoney:
          // так же должно зависеть от богатства и характера родителя
          const money = getRandomValue([
            {value: 0, chance: 50},
            {value: 100, chance: 30},
            {value: 500, chance: 20},
          ]);
          characterStore.$people.updateByKeys([{itemKeys: [playerId, 'money'], value: player.money + money}]);
          break;

        case SpecialEffect.MakeFamiliar:
          connectionUpdates = [...connectionUpdates, {key: 'role', value: PeopleRole.Familiar}];
          break;
      }
    });

    return {connectionUpdates};
  };
}
