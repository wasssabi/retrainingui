import { Field, FieldTypeEnum } from './field';

export let FieldList: Field[] =
[
  {
    id: 1,
    name: 'Age',
    type: FieldTypeEnum.NUMBER,
    created: new Date('Sun May 03 2020')
  },
  {
    id: 2,
    name: 'Name',
    type: FieldTypeEnum.TEXT,
    created: new Date('Mon May 04 2020')
  }
]

export const deleteStorageFieldItem = (id: number): void => {
  FieldList = FieldList.filter(item => item.id !== id);
}
