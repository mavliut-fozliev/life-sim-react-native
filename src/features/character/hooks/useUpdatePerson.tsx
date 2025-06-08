import useCharacterStore from '../../../shared/store/characterStore';
import {Person} from '../../../shared/types/people';
import {UpdateByKeysParams} from '../../../shared/types/store';

export function useUpdatePerson() {
  const characterStore = useCharacterStore();

  const savePerson = (person: Person, providedPropsToSave?: Array<keyof Person>) => {
    const getUpdateObj = (prop: keyof Person) => ({
      itemKeys: [person.id, prop],
      value: person[prop],
    });

    const allPropsToSave: Array<keyof Person> = [
      'age',
      'energy',
      'money',
      'health',
      'power',
      'charm',
      'effects',
      'dead',
    ];

    const propsToSave = providedPropsToSave || allPropsToSave;

    const params: UpdateByKeysParams = propsToSave.map(prop => getUpdateObj(prop));
    characterStore.$people.updateByKeys(params);
  };

  return {savePerson};
}
