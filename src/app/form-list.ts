import { FormStatusEnum, Form } from './form';

export const FormList: Form[] =
[
  {
    id:1, 
    name:'form_item1', 
    description:'description1',
    status: FormStatusEnum.PUBLISHED,
    date: '06-06-1990'
  },
  {
    id:2, 
    name:'form_item2', 
    description:'description1 asd asd sadsadsadsadsad asd asdasd asd asd asd asd as sa',
    status: FormStatusEnum.DRAFT,
    date: '06-06-1999'
  },
  {
    id:2, 
    name:'form_item3', 
    description:'description1',
    status: FormStatusEnum.DRAFT,
    date: '26-11-2000'
  }
]