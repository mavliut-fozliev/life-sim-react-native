import {Icon} from '../../../../../types/icons';
import {PeopleInteraction, SpecialEffect} from '../../../../../types/people';
import {getRandomArrayItem} from '../../../../../utils/common';
import {PeopleRelationship} from '../../../characterProps';

const interaction: PeopleInteraction = {
  icon: Icon.Bills,
  label: 'Ask for Money',
  conditions: [PeopleRelationship.Love, PeopleRelationship.Friendliness],
  oneTimeImpact: [
    {value: -3, chance: 60},
    {value: -5, chance: 40},
  ],
  situationImpact: [{value: undefined, chance: 100}],
  specialEffects: [SpecialEffect.GetMoney],
  getDescriptions: () => {
    const contents = [''];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
