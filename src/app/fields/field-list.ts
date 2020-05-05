import { Field } from './field';

export const FieldList: Field[] =
[
  {
    name: 'Age',
    type: 'Number',
    created: new Date('Fri Dec 08 2019')
  },
  {
    name: 'Count',
    type: 'Number',
    created: new Date('Fri Apr 02 2020')
  },
  {
    name: 'Country',
    type: 'Autocomplete',
    created: new Date('Fri Apr 01 2020')
  },
  {
    name: 'City',
    type: 'Autocomplete',
    created: new Date('Fri Apr 03 2020')
  },
  {
    name: 'Name',
    type: 'Text',
    created: new Date('Fri Apr 05 2020')
  }
];
