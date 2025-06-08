import {Person} from '../../shared/types/people';
import {getRandomValue} from '../../shared/utils/common';
import {activityData} from './activities/activityData';
import {places} from './places';
import {ActivityItem} from './types';

export const getDistricts = (person: Person) => places[person.country][person.city] || {};

export const getAvailableActivities = (person: Person) => {
  const districts = getDistricts(person);
  const districtActivities = Object.values(districts);
  const availablePlaces = districtActivities.flatMap(d => Object.values(d));
  return availablePlaces.flatMap(p => activityData[p.type][p.level]);
};

export const isEnoughToDoActivity = (selectedActivity: ActivityItem, person: Person) =>
  selectedActivity.price.every(({resource, amount}) => person[resource] >= amount);

export const updatePersonByActivity = (selectedActivity: ActivityItem, person: Person) => {
  if (isEnoughToDoActivity(selectedActivity, person)) {
    selectedActivity.price.forEach(({resource, amount}) => (person[resource] = person[resource] - amount));

    selectedActivity.action.forEach(({stat, chances}) => (person[stat] = person[stat] + getRandomValue(chances)));
  }
};
