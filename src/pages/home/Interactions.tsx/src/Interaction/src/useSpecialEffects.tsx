import {PeopleRole} from '../../../../../../shared/constants/character/characterProps';
import {SpecialEffect} from '../../../../../../shared/constants/character/interactions/common';
import {PeopleConnection, PeopleInteraction} from '../../../../../../shared/types/people';
import {getRandomValue} from '../../../../../../shared/utils/common';
import usePlayerStore from '../../../../../../shared/store/playerStore';

type ConnectionUpdate = {key: keyof PeopleConnection; value: string | number};

export function useSpecialEffects(interaction: PeopleInteraction) {
  const playerStore = usePlayerStore();

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
          playerStore.$person.updateByKeys([{itemKeys: ['money'], value: playerStore.person.money + money}]);
          break;

        case SpecialEffect.MakeFamiliar:
          connectionUpdates = [...connectionUpdates, {key: 'role', value: PeopleRole.Familiar}];
          break;
      }
    });

    return {connectionUpdates};
  };
}
