import {Person} from '../../shared/types/people';
import {activityData} from './activities/activityData';
import {places} from './places';

export const getDistricts = (person: Person) => places[person.country][person.city] || {};

export const getAvailableActivities = (person: Person) => {
  const districts = getDistricts(person);
  const districtActivities = Object.values(districts);
  const availablePlaces = districtActivities.flatMap(d => Object.values(d));
  return availablePlaces.flatMap(p => activityData[p.type][p.level]);
};
