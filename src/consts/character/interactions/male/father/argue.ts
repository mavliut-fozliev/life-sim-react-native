import {Icon} from '../../../../../types/icons';
import {PeopleInteraction} from '../../../../../types/people';
import {getRandomArrayItem} from '../../../../../utils/common';
import {PeopleRelationship, PeopleSituation} from '../../../characterProps';

const interaction: PeopleInteraction = {
  icon: Icon.Strength,
  label: 'Argue',
  conditions: [
    PeopleRelationship.Love,
    PeopleRelationship.Friendliness,
    PeopleRelationship.Neutrality,
    PeopleRelationship.Coldness,
  ],
  oneTimeImpact: [
    {value: -8, chance: 60},
    {value: -15, chance: 40},
  ],
  situationImpact: [
    {value: PeopleSituation.Conflict, chance: 50},
    {value: PeopleSituation.Resentment, chance: 40},
    {value: undefined, chance: 10},
  ],
  getDescriptions: () => {
    const contents = [''];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
