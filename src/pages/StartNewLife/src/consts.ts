import {PlacePeopleType} from '../../../features/character/characterProps';
import {PlaceLevel, PlaceType} from '../../../features/places/common';

export const characterMap: Record<PlaceType, Record<PlaceLevel, PlacePeopleType[]>> = {
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
