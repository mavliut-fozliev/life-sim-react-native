import {PeopleRole} from '../consts/character/characterProps';
import {Chances, ObjectRecord} from '../types/common';
import {Person} from '../types/people';

export const getRandomArrayItem = <T>(array: T[]): T | undefined => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// the higher the bias, the less likely it is to get a large number
// examples (from = 1, to = 10):
// 0.05 -> 1:15%  2:12%  3:11%  4:10%  5:10%  6:10%  7:8%  8:8%  9:8%  10:8%
// 0.1 ->  1:20%  2:13%  3:11%  4:10%  5:9%   6:8%   7:8%  8:7%  9:7%  10:7%
// 0.2 ->  1:28%  2:13%  3:11%  4:9%   5:8%   6:7%   7:7%  8:6%  9:6%  10:5%
// 0.5 ->  1:46%  2:12%  3:9%   4:7%   5:6%   6:5%   7:4%  8:4%  9:4%  10:3%
// 1.0 ->  1:63%  2:9%   3:6%   4:5%   5:4%   6:3%   7:3%  8:3%  9:2%  10:2%
export function getRandomInRange(from: number, to: number, bias: number = 0) {
  const range = to - from + 1;

  const rnd = Math.random();
  const skewed = Math.pow(rnd, 1 + bias * 4);
  return Math.floor(skewed * range) + from;
}

export const getRandomValue = <T>(array: Chances<T>) => {
  const random = Math.random() * 100;

  const sorted = array.sort((a, b) => b.chance - a.chance);

  let totalChance = 0;

  const found = sorted.find(item => {
    totalChance += item.chance;
    return random < totalChance;
  });

  return found?.value ?? sorted[0].value;
};

export function findMatchingKeyByMaxNumber<T extends string | number>(
  valueMap: {[key in T]: number},
  value: number,
): T | undefined {
  const sortedEntries = Object.entries(valueMap) as [T, number][];
  sortedEntries.sort(([, maxA], [, maxB]) => maxA - maxB);

  for (const [key, max] of sortedEntries) {
    if (value <= max) {
      return key;
    }
  }
  return undefined;
}

export function findMatchingValueByMaxKey<T extends string | number>(
  valueMap: {[key in number]: T},
  value: number,
): T | undefined {
  const sortedEntries = Object.entries(valueMap);
  sortedEntries.sort(([maxA], [maxB]) => Number(maxA) - Number(maxB));

  for (const [key, val] of sortedEntries) {
    if (value <= Number(key)) {
      return val;
    }
  }
  return undefined;
}

export function findByRole(people: ObjectRecord<Person>, role: PeopleRole) {
  return Object.values(people).find(p => p.role === role);
}
