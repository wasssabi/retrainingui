import { Injectable } from '@angular/core';
import { Form } from "src/app/form";
import { Field } from "src/app/field";
import { FormList } from "src/app/form-list";
import { FieldList } from "src/app/field-list";
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
}
