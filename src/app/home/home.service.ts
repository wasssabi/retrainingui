import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

import { Form, FormStatusEnum } from '../form';
import { Field } from '../field';
import { FormResponse } from "../respInterface";
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  userToken: string;

  constructor(private http: HttpClient) { }

  formList: Form[] = [];
  fieldList: Field[];

  requestFields() {
    return this.http.get<Field[]>('http://localhost:8080/fields');
    
  }

  requestForms(): Observable<Form[]> {
    return this.http.get<Form[]>('http://localhost:8080/forms');
  }

  getField() {
    this.requestFields()
    .subscribe(incomingField => {
      for(let i in incomingField){
        console.log(i);
      }
      console.log(incomingField);
    });
  }

  setToken(value) {
    this.userToken = value;
    console.log(this.userToken);
  }

  getToken(): Observable<string> {
    return of(this.userToken);
  }

  clearToken() {
    this.userToken = null;
  }

  addFormItem(item: Form): void {
    this.http.post<Form>('http://localhost:8080/forms', item).subscribe(data => console.log(data));
  }

  addFieldItem(item: Field): void {
    this.http.post<Field>('http://localhost:8080/fields', item).subscribe(data => console.log(data));
  }

  deleteFormItem(id: number): void {
    this.http.delete('http://localhost:8080/forms/' + id).subscribe(data => console.log(data));
  }

  deleteFieldItem(id: number): void {
    this.http.delete('http://localhost:8080/fields/' + id).subscribe(data => console.log(data));
  }

  shareFormItem(id: number): void {
  }

  shareFieldItem(id: number): void {
  }
}
