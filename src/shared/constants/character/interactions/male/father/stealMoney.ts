import {Icon} from '../../../../../icons/icons';
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
    PeopleRelationship.Indifference,
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
      'I took some money from my dad’s wallet when he wasn’t around — felt wrong, but I did it.',
      'Slipped a few bills from my dad’s drawer — tried not to think about it too much.',
      'Told myself I’d return it later, but for now I just took the cash from my dad.',
      'Stole money from my dad — my hands were shaking the whole time.',
      'I didn’t ask — just grabbed what I needed from my dad’s wallet and walked away.',
      'My dad didn’t notice, or maybe he did — either way, I took the money.',
      'Felt ashamed the second I did it — but I still took cash from my dad.',
      'I needed the money, but taking it from my dad without asking felt heavy.',
      'Did it fast, quietly — just hoping my dad wouldn’t check his wallet too soon.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
