import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Form } from '../form';
import { Field } from '../field';
import { FormList, deleteStorageFormItem } from '../form-list';
import { FieldList } from '../field-list';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  getField(): Observable<Field[]> {
    return of(FieldList);
  }
  getForm(): Observable<Form[]> {
    return of(FormList);
  }
  
  addFormItem(item: Form): void {
    FormList.push(item);
    console.log(FormList);
  }

  addFieldItem(item: Field): void {
    FieldList.push(item);
  }

  deleteFormItem(id: number): void {
    deleteStorageFormItem(id);
  }

  shareFormItem(id: number): void {
  }
}
