import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Form } from '../form';
import { Field } from '../field';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  userToken: string;

  constructor(private http: HttpClient) { }

  formList: Form[] = [];
  fieldList: Field[];
  mainUrl = environment.apiURL;
  formsUrl = environment.formsPage;
  fieldsUrl = environment.fieldsPage;

  requestFields() {
    return this.http.get<Field[]>(this.mainUrl + this.fieldsUrl).pipe(
      catchError(this.handleError)
    );
  }

  requestForms(): Observable<Form[]> {
    return this.http.get<Form[]>(this.mainUrl + this.formsUrl).pipe(
      catchError(this.handleError)
    );
  }

  getField() {
    this.requestFields()
    .subscribe(incomingField => {
      for (let i in incomingField){
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
    this.http.post<Form>(this.mainUrl + this.formsUrl, item).pipe(
      catchError(this.handleError)
    ).subscribe();
  }

  addFieldItem(item: Field): void {
    this.http.post<Field>(this.mainUrl + this.fieldsUrl, item).pipe(
      catchError(this.handleError)
    ).subscribe();
  }

  deleteFormItem(id: number): void {
    this.http.delete(this.mainUrl + this.formsUrl + id).pipe(
      catchError(this.handleError)
    ).subscribe();
  }

  deleteFieldItem(id: number): void {
    this.http.delete(this.mainUrl + this.fieldsUrl + id).pipe(
      catchError(this.handleError)
    ).subscribe();
  }

  shareFormItem(id: number): void {
  }

  shareFieldItem(id: number): void {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}\n` +
        `With message: ${error.error.message}\n` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
