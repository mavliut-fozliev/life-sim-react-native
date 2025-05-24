import {characterNames} from '../../../../../../consts/character/characterNames';
import {PeopleRole, PeopleSituation, PlacePeopleType} from '../../../../../../consts/character/characterProps';
import {characterSurnames} from '../../../../../../consts/character/characterSurnames';
import {ImmuneSystem} from '../../../../../../consts/character/genetics';
import {Gender} from '../../../../../../consts/gender';
import {places} from '../../../../../../consts/places/places';
import {useLocalizeText} from '../../../../../../locales/useLocalizeText';
import {ObjectRecord} from '../../../../../../types/common';
import {Person, PlacePeople} from '../../../../../../types/people';
import {getRandomArrayItem, getRandomInRange, getRandomValue} from '../../../../../../utils/common';
import useCharacterStore from '../../store/characterStore';
import usePlayerStore from '../../store/playerStore';
import {characterMap} from './consts';
import useStore from './store';
import uuid from 'react-native-uuid';
const uuidv4 = uuid.v4;

export function useCreateCharacters() {
  const {country, city, surname, gender} = useStore();
  const characterStore = useCharacterStore();
  const playerStore = usePlayerStore();
  const {translate} = useLocalizeText();

  const playerSprite = {
    body: 'light',
    eyes: 'black',
    mouth: 'smile',
  } as const;

  const getName = (type: 'name' | 'surname', characterGender: Gender) => {
    let names = characterNames[country][characterGender];
    if (type === 'surname') {
      names = characterSurnames[country][characterGender];
    }

    let randomName = getRandomArrayItem(names) || 'Name';
    if (type === 'surname') {
      randomName = getRandomArrayItem(names) || 'Surname';
    }

    let localizedName = translate(randomName);
    if (type === 'surname') {
      localizedName = translate(randomName);
    }

    return localizedName;
  };

  const getMother = (): Person => {
    return {
      id: uuidv4(),
      country: country,
      city: city,
      gender: Gender.Female,
      name: getName('name', Gender.Female),
      surname: gender === Gender.Female ? surname : getName('surname', Gender.Female),
      age: getRandomInRange(18, 40, 0.2),
      money: 100,
      energy: 20,
      health: 80,
      power: 10,
      charm: 10,
      mood: 60,
      sprite: {
        body: 'light',
        eyes: 'black',
        mouth: 'smile',
      },
      role: PeopleRole.Mother,
      relationship: 90,
      situation: PeopleSituation.Admiration,
      situationDuration: 5,
      genetics: {
        immuneSystem: ImmuneSystem.Normal,
      },
      effects: [],
    };
  };

  const getFather = (): Person => {
    return {
      id: uuidv4(),
      country: country,
      city: city,
      gender: Gender.Male,
      name: getName('name', Gender.Male),
      surname: gender === Gender.Male ? surname : getName('surname', Gender.Male),
      age: getRandomInRange(18, 40, 0.1),
      money: 100,
      energy: 20,
      health: 80,
      power: 10,
      charm: 10,
      mood: 60,
      sprite: {
        body: 'light',
        eyes: 'black',
        mouth: 'smile',
        hair: 'average',
      },
      role: PeopleRole.Father,
      relationship: 90,
      situation: PeopleSituation.Admiration,
      situationDuration: 5,
      genetics: {
        immuneSystem: ImmuneSystem.Normal,
      },
      effects: [],
    };
  };

  const getPerson = (placePeopleType: PlacePeopleType): Person => {
    const names = characterNames[country][Gender.Male];
    const randomName = getRandomArrayItem(names) || 'PersonName';
    const localizedName = translate(randomName);

    const surnames = characterSurnames[country][Gender.Male];
    const randomSurname = getRandomArrayItem(surnames) || 'PersonSurname';
    const localizedSurname = translate(randomSurname);

    const immuneSystem = getRandomValue([
      {value: ImmuneSystem.Normal, chance: 60},
      {value: ImmuneSystem.Weak, chance: 20},
      {value: ImmuneSystem.Strong, chance: 20},
    ]);

    const longevity = getRandomValue([
      {value: false, chance: 80},
      {value: true, chance: 20},
    ]);

    return {
      id: uuidv4(),
      country: country,
      city: city,
      gender: Gender.Male,
      name: localizedName,
      surname: localizedSurname,
      age: getRandomInRange(18, 60),
      money: 100,
      energy: 20,
      health: 80,
      power: 10,
      charm: 10,
      mood: 60,
      sprite: {
        body: 'light',
        eyes: 'black',
        mouth: 'smile',
        hair: 'average',
      },
      role: PeopleRole.Stranger,
      relationship: 50,
      genetics: {
        immuneSystem,
        longevity,
      },
      effects: [],

      placePeopleType,
    };
  };

  const people: ObjectRecord<Person> = {}; // people contains all characters
  const addToPeople = (person: Person) => (people[person.id] = person);

  const placePeople: PlacePeople = {};

  function createPlacePeople() {
    const districts = places[country]?.[city] || {};

    Object.entries(districts).forEach(([districtName, districtPlaces]) => {
      placePeople[districtName] = {};

      Object.entries(districtPlaces).forEach(([placeName, placeProps]) => {
        const currentPlacePeople = characterMap[placeProps.type][placeProps.level];

        placePeople[districtName][placeName] = currentPlacePeople.map(placePeopleType => {
          const person = getPerson(placePeopleType);
          addToPeople(person);
          return person.id;
        });
      });
    });
  }

  return () => {
    addToPeople(getMother());
    addToPeople(getFather());
    createPlacePeople();

    playerStore.$sprite.set(playerSprite);
    characterStore.$people.set(people);
    characterStore.$placePeople.set(placePeople);
  };
}
