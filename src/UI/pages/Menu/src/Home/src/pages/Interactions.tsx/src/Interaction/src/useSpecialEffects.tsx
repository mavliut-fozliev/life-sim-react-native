import {PeopleRole} from '../../../../../../../../../../../consts/character/characterProps';
import {SpecialEffect} from '../../../../../../../../../../../consts/character/interactions/common';
import {PeopleInteraction, Person} from '../../../../../../../../../../../types/people';
import {UpdateByKeysParams} from '../../../../../../../../../../../types/store';
import {getRandomValue} from '../../../../../../../../../../../utils/common';
import usePlayerStore from '../../../../../../../store/playerStore';

export function useSpecialEffects(interaction: PeopleInteraction, person: Person) {
  const playerStore = usePlayerStore();

  return (): {params: UpdateByKeysParams} | undefined => {
    if (!interaction.specialEffects) {
      return;
    }

    let params: UpdateByKeysParams = [];

    interaction.specialEffects.forEach(effect => {
      switch (effect) {
        case SpecialEffect.GetMoney:
          // так же должно зависеть от богатства и характера родителя
          const money = getRandomValue([
            {value: 0, chance: 50},
            {value: 100, chance: 30},
            {value: 500, chance: 20},
          ]);
          playerStore.$money.increase(money);
          break;

        case SpecialEffect.MakeFamiliar:
          const roleUpdateParams = {
            itemKeys: [person.id, 'role'],
            value: PeopleRole.Familiar,
          };
          params = [...params, roleUpdateParams];
          break;
      }
    });

    return {params};
  };
}
