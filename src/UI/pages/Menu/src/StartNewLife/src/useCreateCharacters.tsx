import {characterNames} from '../../../../../../consts/character/characterNames';
import {PeopleRelationship, PeopleRole, PlacePeopleType} from '../../../../../../consts/character/characterProps';
import {characterSurnames} from '../../../../../../consts/character/characterSurnames';
import {Gender} from '../../../../../../consts/gender';
import {places} from '../../../../../../consts/places';
import {useLocalizeText} from '../../../../../../locales/useLocalizeText';
import {ObjectRecord} from '../../../../../../types/common';
import {FamilyPerson, Person, PlacePeople} from '../../../../../../types/people';
import {getRandomArrayItem, getRandomInRange} from '../../../../../../utils/common';
import useCharacterStore from '../../store/characterStore';
import usePlayerStore from '../../store/playerStore';
import {characterMap} from './consts';
import useStore from './store';
import uuid from 'react-native-uuid';
const uuidv4 = uuid.v4;

export function useCreateCharacters() {
  const {country, city, surname} = useStore();
  const characterStore = useCharacterStore();
  const playerStore = usePlayerStore();
  const {getText} = useLocalizeText();

  const playerSprite = {
    legs: 'light',
    body: 'light',
    head: 'light',
    eyes: 'black',
    mouth: 'smile',
  } as const;

  const getMother = (): FamilyPerson => {
    const names = characterNames[country][Gender.Female];
    const randomName = getRandomArrayItem(names) || 'MotherName';
    const localizedName = getText(['character', 'names', randomName]);

    return {
      id: uuidv4(),
      country: country,
      city: city,
      gender: Gender.Female,
      name: localizedName,
      surname: surname,
      age: getRandomInRange(18, 40, 0.2),
      role: PeopleRole.Mother,
      relationship: [PeopleRelationship.Love, PeopleRelationship.Strictness],
      params: {
        money: 10000,
        health: 80,
      },
      sprite: {
        legs: 'light',
        body: 'light',
        head: 'light',
        eyes: 'black',
        mouth: 'smile',
      },
    };
  };

  const getFather = (): FamilyPerson => {
    const names = characterNames[country][Gender.Male];
    const randomName = getRandomArrayItem(names) || 'FatherName';
    const localizedName = getText(['character', 'names', randomName]);

    return {
      id: uuidv4(),
      country: country,
      city: city,
      gender: Gender.Male,
      name: localizedName,
      surname: surname,
      age: getRandomInRange(18, 40, 0.1),
      role: PeopleRole.Father,
      relationship: [PeopleRelationship.Love, PeopleRelationship.Trust],
      params: {
        money: 10000,
        health: 80,
      },
      sprite: {
        legs: 'light',
        body: 'light',
        head: 'light',
        eyes: 'black',
        mouth: 'smile',
        hair: 'average',
      },
    };
  };

  const getPerson = (placePeopleType: PlacePeopleType): Person => {
    const names = characterNames[country][Gender.Male];
    const randomName = getRandomArrayItem(names) || 'PersonName';
    const localizedName = getText(['character', 'names', randomName]);

    const surnames = characterSurnames[country][Gender.Male];
    const randomSurname = getRandomArrayItem(surnames) || 'PersonSurname';
    const localizedSurname = getText(['character', 'surnames', randomSurname]);

    return {
      id: uuidv4(),
      gender: Gender.Male,
      name: localizedName,
      surname: localizedSurname,
      age: getRandomInRange(18, 60),
      role: PeopleRole.Stranger,
      relationship: [PeopleRelationship.Neutrality],
      sprite: {
        legs: 'light',
        body: 'light',
        head: 'light',
        eyes: 'black',
        mouth: 'smile',
        hair: 'average',
      },
      placePeopleType,
    };
  };

  const people: ObjectRecord<Person> = {}; // people contains all characters
  const addToPeople = (person: Person) => (people[person.id] = person);

  const placePeople: PlacePeople = {};
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

  return () => {
    playerStore.$sprite.set(playerSprite);
    characterStore.$mother.set(getMother());
    characterStore.$father.set(getFather());
    characterStore.$people.set(people);
    characterStore.$placePeople.set(placePeople);
  };
}
