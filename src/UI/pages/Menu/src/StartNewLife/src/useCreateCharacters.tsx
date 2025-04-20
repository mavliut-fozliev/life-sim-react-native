import {characterNames} from '../../../../../../consts/character/characterNames';
import {characterSurnames} from '../../../../../../consts/character/characterSurnames';
import {Gender} from '../../../../../../consts/gender';
import {places} from '../../../../../../consts/places';
import {useLocalizeText} from '../../../../../../locales/useLocalizeText';
import {FamilyPerson, Person, PlacePeople, PlacePeopleType} from '../../../../../../types/people';
import {PlaceLevel, PlaceType} from '../../../../../../types/places';
import {getRandomArrayItem, getRandomInRange} from '../../../../../../utils/common';
import useCharacterStore from '../../store/characterStore';
import usePlayerStore from '../../store/playerStore';
import useStore from './store';

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
    const localizedName = getText(['characterNames', randomName]);

    return {
      country: country,
      city: city,
      gender: Gender.Female,
      name: localizedName,
      surname: surname,
      age: getRandomInRange(18, 40, 0.2),
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
    const localizedName = getText(['characterNames', randomName]);

    return {
      country: country,
      city: city,
      gender: Gender.Male,
      name: localizedName,
      surname: surname,
      age: getRandomInRange(18, 40, 0.1),
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
    const localizedName = getText(['characterNames', randomName]);

    const surnames = characterSurnames[country][Gender.Male];
    const randomSurname = getRandomArrayItem(surnames) || 'PersonSurname';
    const localizedSurname = getText(['characterSurnames', randomSurname]);

    return {
      gender: Gender.Male,
      name: localizedName,
      surname: localizedSurname,
      age: getRandomInRange(18, 60),
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

  const characterMap: Record<PlaceType, Record<PlaceLevel, PlacePeopleType[]>> = {
    [PlaceType.Gym]: {
      [PlaceLevel.One]: [PlacePeopleType.Visitor],
      [PlaceLevel.Two]: [PlacePeopleType.Visitor],
      [PlaceLevel.Three]: [PlacePeopleType.Visitor],
    },
    [PlaceType.Hospital]: {
      [PlaceLevel.One]: [PlacePeopleType.Visitor],
      [PlaceLevel.Two]: [PlacePeopleType.Visitor],
      [PlaceLevel.Three]: [PlacePeopleType.Visitor],
    },
    [PlaceType.Nightclub]: {
      [PlaceLevel.One]: [PlacePeopleType.Visitor],
      [PlaceLevel.Two]: [PlacePeopleType.Visitor],
      [PlaceLevel.Three]: [PlacePeopleType.Bartender, PlacePeopleType.SecurityGuard, PlacePeopleType.Visitor],
    },
  };

  const districts = places[country]?.[city] || {};
  const people: PlacePeople = {};

  Object.entries(districts).forEach(([districtName, districtPlaces]) => {
    people[districtName] = {};
    Object.entries(districtPlaces).forEach(([placeName, placeProps]) => {
      const placePeople = characterMap[placeProps.type][placeProps.level];
      people[districtName][placeName] = placePeople.map(placePeopleType => getPerson(placePeopleType));
    });
  });

  return () => {
    playerStore.$sprite.set(playerSprite);
    characterStore.$mother.set(getMother());
    characterStore.$father.set(getFather());
    characterStore.$people.set(people);
  };
}
