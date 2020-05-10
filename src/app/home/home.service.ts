import { Injectable } from '@angular/core';

import { Form } from "../form";
import { Field } from "../field";
import { FormList } from "../form-list";
import { FieldList } from "../field-list";
import { Observable, of } from "rxjs";

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
  
  addItem(itemType, newTitle, description) {
    if (itemType === "Field") {
      FieldList.push({name: newTitle, type: description, created: new Date()})
    } else {
      FormList.push({
        id: FormList.length, 
        name: newTitle, 
        description: description,
        status: FormStatusEnum.DRAFT,
        date: new Date().toISOString()
      })
    }
  }
}
