import femaleMotherSpendTimeTogether from './female/mother/spendTimeTogether';
import femaleMotherGivePraise from './female/mother/givePraise';
import femaleMotherTalkOnThePhone from './female/mother/talkOnThePhone';
import femaleMotherTryToMakePeace from './female/mother/tryToMakePeace';
import femaleMotherAskAboutHealth from './female/mother/askAboutHealth';
import femaleMotherAskForMoney from './female/mother/askForMoney';
import femaleMotherAskForMoney2 from './female/mother/askForMoney2';
import femaleMotherArgue from './female/mother/argue';
import femaleMotherStealMoney from './female/mother/stealMoney';

import femaleStrangerBecomeAcquainted from './female/stranger/becomeAcquainted';

import maleFatherSpendTimeTogether from './male/father/spendTimeTogether';
import maleFatherGivePraise from './male/father/givePraise';
import maleFatherTalkOnThePhone from './male/father/talkOnThePhone';
import maleFatherTryToMakePeace from './male/father/tryToMakePeace';
import maleFatherAskAboutHealth from './male/father/askAboutHealth';
import maleFatherAskForMoney from './male/father/askForMoney';
import maleFatherAskForMoney2 from './male/father/askForMoney2';
import maleFatherArgue from './male/father/argue';
import maleFatherStealMoney from './male/father/stealMoney';

import maleStrangerBecomeAcquainted from './male/stranger/becomeAcquainted';

import {Gender} from '../../../shared/constants/gender';
import {PeopleRole} from '../characterProps';
import {PeopleInteractions} from '../../../shared/types/people';

export const interactions: PeopleInteractions = {
  [Gender.Female]: {
    [PeopleRole.ParentChild]: [
      femaleMotherSpendTimeTogether,
      femaleMotherGivePraise,
      femaleMotherTalkOnThePhone,
      femaleMotherTryToMakePeace,
      femaleMotherAskAboutHealth,
      femaleMotherAskForMoney,
      femaleMotherAskForMoney2,
      femaleMotherArgue,
      femaleMotherStealMoney,
    ],
    [PeopleRole.Sibling]: [],
    [PeopleRole.Spouse]: [],
    [PeopleRole.Friend]: [],
    [PeopleRole.Familiar]: [],
    [PeopleRole.Stranger]: [femaleStrangerBecomeAcquainted],
  },
  [Gender.Male]: {
    [PeopleRole.ParentChild]: [
      maleFatherSpendTimeTogether,
      maleFatherGivePraise,
      maleFatherTalkOnThePhone,
      maleFatherTryToMakePeace,
      maleFatherAskAboutHealth,
      maleFatherAskForMoney,
      maleFatherAskForMoney2,
      maleFatherArgue,
      maleFatherStealMoney,
    ],
    [PeopleRole.Sibling]: [],
    [PeopleRole.Spouse]: [],
    [PeopleRole.Friend]: [],
    [PeopleRole.Familiar]: [],
    [PeopleRole.Stranger]: [maleStrangerBecomeAcquainted],
  },
};
