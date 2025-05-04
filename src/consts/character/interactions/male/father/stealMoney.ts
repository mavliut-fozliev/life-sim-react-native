import {Icon} from '../../../../../types/icons';
import {PeopleInteraction} from '../../../../../types/people';
import {getRandomArrayItem} from '../../../../../utils/common';
import {PeopleRelationship, PeopleSituation} from '../../../characterProps';

const interaction: PeopleInteraction = {
  icon: Icon.Bills,
  label: 'Steal Money',
  conditions: [
    PeopleRelationship.Love,
    PeopleRelationship.Friendliness,
    PeopleRelationship.Neutrality,
    PeopleRelationship.Coldness,
    PeopleRelationship.Hostility,
  ],
  oneTimeImpact: [
    {value: -30, chance: 50},
    {value: -50, chance: 50},
  ],
  situationImpact: [
    {value: PeopleSituation.Conflict, chance: 70},
    {value: PeopleSituation.Disappointment, chance: 20},
    {value: undefined, chance: 10},
  ],
  getDescriptions: () => {
    const contents = [''];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
