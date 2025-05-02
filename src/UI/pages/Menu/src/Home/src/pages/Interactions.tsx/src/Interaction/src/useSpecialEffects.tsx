import {PeopleRole} from '../../../../../../../../../../../consts/character/characterProps';
import {PeopleInteraction, Person, SpecialEffect} from '../../../../../../../../../../../types/people';
import {UpdateByKeysParams} from '../../../../../../../../../../../types/store';
import usePlayerStore from '../../../../../../../store/playerStore';

export function useSpecialEffects(interaction: PeopleInteraction, params: UpdateByKeysParams, person: Person) {
  const playerStore = usePlayerStore();

  return () => {
    if (interaction.specialEffects) {
      interaction.specialEffects.forEach(effect => {
        switch (effect) {
          case SpecialEffect.GetMoney:
            playerStore.$money.increase(100);
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
    }
  };
}
