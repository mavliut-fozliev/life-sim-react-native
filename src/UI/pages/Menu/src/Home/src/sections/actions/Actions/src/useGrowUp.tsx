import {PeopleRole, peopleSituationImpact} from '../../../../../../../../../../consts/character/characterProps';
import {ImmuneSystem} from '../../../../../../../../../../consts/character/genetics';
import {Person} from '../../../../../../../../../../types/people';
import {UpdateByKeysParams} from '../../../../../../../../../../types/store';
import {findMatchingValueByMaxKey, getRandomInRange, getRandomValue} from '../../../../../../../../../../utils/common';
import useCharacterStore from '../../../../../../store/characterStore';
import usePlayerStore from '../../../../../../store/playerStore';
import {useStoreHooks} from '../../../../../../store/storeHooks';

export function useGrowUp() {
  const playerStore = usePlayerStore();
  const characterStore = useCharacterStore();
  const {addAgeToHistory} = useStoreHooks();

  const peopleManipulation = (person: Person) => {
    let params: UpdateByKeysParams = [];

    const increaseAge = () => {
      const ageUpdateParams = {
        itemKeys: [person.id, 'age'],
        value: person.age + 1,
      };

      params = [...params, ageUpdateParams];
    };

    const updateRelationship = () => {
      if (person.role === PeopleRole.Stranger) {
        return;
      }

      const initialImpact = -2;
      const newRelationship = person.relationship + initialImpact;

      const relationshipUpdateParams = {
        itemKeys: [person.id, 'relationship'],
        value: newRelationship,
        min: 0,
        max: 100,
      };

      const performedActionsUpdateParams = {
        itemKeys: [person.id, 'performedActions'],
        value: 0,
      };

      params = [...params, relationshipUpdateParams, performedActionsUpdateParams];

      if (person.situation && person.situationDuration) {
        relationshipUpdateParams.value = newRelationship + peopleSituationImpact[person.situation];

        const situationDurationUpdateParams = {
          itemKeys: [person.id, 'situationDuration'],
          value: person.situationDuration - 1,
        };
        params = [...params, situationDurationUpdateParams];

        if (person.situationDuration === 1) {
          const situationUpdateParams = {
            itemKeys: [person.id, 'situation'],
            value: undefined,
          };
          params = [...params, situationUpdateParams];
        }
      }
    };

    const updateHealth = () => {
      const initialImpact = 0;

      const impactMap = {
        30: 0,
        50: -1,
        60: -2,
        80: -3,
      };

      const ageImpact = findMatchingValueByMaxKey(impactMap, person.age) ?? -5;

      const immuneSystemMap = {
        [ImmuneSystem.Weak]: [
          {value: 0, chance: 60},
          {value: -1, chance: 30},
          {value: 1, chance: 10},
        ],
        [ImmuneSystem.Normal]: [
          {value: 0, chance: 60},
          {value: -1, chance: 20},
          {value: 1, chance: 20},
        ],
        [ImmuneSystem.Strong]: [
          {value: 0, chance: 60},
          {value: 1, chance: 30},
          {value: -1, chance: 10},
        ],
      };

      const immuneSystemChances = immuneSystemMap[person.genetics.immuneSystem];
      const immuneSystemImpact = getRandomValue(immuneSystemChances);

      const longevityImpact = person.genetics.longevity ? 1 : 0;

      const totalImpact = initialImpact + ageImpact + immuneSystemImpact + longevityImpact;

      const healthUpdateParams = {
        itemKeys: [person.id, 'params', 'health'],
        value: person.params.health + totalImpact,
      };
      params = [...params, healthUpdateParams];
    };

    const kill = () => {
      const healthMap = {
        0: 100,
        4: getRandomInRange(50, 90),
        14: getRandomInRange(15, 50),
        29: getRandomInRange(5, 15),
        49: getRandomInRange(1, 5),
        69: getRandomInRange(0.1, 0.5),
      };

      // if health >= 70, then kill chance is 0
      const killChance = findMatchingValueByMaxKey(healthMap, person.params.health) ?? 0;

      const shouldDead = getRandomValue([
        {value: false, chance: 100 - killChance},
        {value: true, chance: killChance},
      ]);

      const deadUpdateParams = {
        itemKeys: [person.id, 'dead'],
        value: shouldDead,
      };
      params = [...params, deadUpdateParams];
    };

    increaseAge();
    updateRelationship();
    updateHealth();
    kill();

    characterStore.$people.updateByKeys(params);
  };

  const peopleManipulations = () => {
    Object.values(characterStore.people).forEach(person => {
      if (person.dead) {
        return;
      }
      peopleManipulation(person);
    });
  };

  return () => {
    addAgeToHistory();
    playerStore.$age.increase(1);
    playerStore.$energy.set(20);
    peopleManipulations();
  };
}
