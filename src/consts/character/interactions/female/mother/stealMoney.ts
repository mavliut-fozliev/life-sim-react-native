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
    const contents = [
      'I quietly took some cash from my mom’s wallet — guilt hit me right after.',
      'Snuck a few bills from my mom’s purse while she wasn’t looking.',
      'Took money from my mom without asking — just hoped she wouldn’t notice.',
      'Felt awful doing it, but I took some cash from my mom’s bag.',
      'I knew it was wrong, but I was desperate — so I grabbed some money from my mom.',
      'Slipped a few bills out of my mom’s wallet — my hands were shaking.',
      'Took it without a word — my mom didn’t even know I was struggling.',
      'Felt like a terrible person, but I still took the money from my mom.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
