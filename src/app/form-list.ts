import { FormStatusEnum, Form } from './form';

export let FormList: Form[] =
[
  {
    id:1, 
    name:'form_item1', 
    description:'description1',
    status: FormStatusEnum.PUBLISHED,
    date: new Date()
  },
  {
    id:2, 
    name:'form_item2', 
    description:'description1 asd asd sadsadsadsadsad asd asdasd asd asd asd asd as sa',
    status: FormStatusEnum.DRAFT,
    date:  new Date()
  },
  {
    id:3, 
    name:'form_item3', 
    description:'description1',
    status: FormStatusEnum.DRAFT,
    date: new Date()
  }
]

export const deleteStorageFormItem = (id: number): void => {
  FormList = FormList.filter(item => item.id !== id);
}
