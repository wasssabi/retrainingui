import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Form } from '../form';
import { Field } from '../field';
import { error } from '@angular/compiler/src/util';
import { LoginUser, UserBasicData } from '../user';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  userToken: string;
  currentUserId: number;

  constructor(private http: HttpClient) { }

  formList: Form[] = [];
  fieldList: Field[];
  env = environment;

  requestFields() {
    let httpOptions = 
    {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    }

    return this.http.get<Field[]>(this.env.apiURL + this.env.fieldsPage, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  requestForms(): Observable<Form[]> {
    return this.http.get<Form[]>(this.env.apiURL + this.env.formsPage).pipe(
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
    this.getCurrentUser().subscribe(data => this.currentUserId = data.id);
  }

  getToken(): Observable<string> {
    return of(this.userToken);
  }

  getCurrentUserId(): Observable<number>{
    return of(this.currentUserId);
  }

  clearToken() {
    this.userToken = null;
    this.currentUserId = null;
  }

  addFormItem(item: Form): void {
    this.http.post<Form>(this.env.apiURL + this.env.formsPage, item).pipe(
      catchError(this.handleError)
    ).subscribe();
  }

  addFieldItem(item: Field): void {
    if (this.userToken){
      this.getCurrentUser().subscribe(data => {
        item.ownersId = data.id;
          this.postField(item);
        })
    }else {
      this.postField(item);
    }
  }

  postField(item: Field): void {
    this.http.post<Field>(this.env.apiURL + this.env.fieldsPage, item).pipe(
      catchError(this.handleError)
    ).subscribe(data => console.log(data));
  }

  deleteFormItem(id: number): void {
    this.http.delete(this.env.apiURL + this.env.formsPage + id).pipe(
      catchError(this.handleError)
    ).subscribe();
  }

  deleteFieldItem(id: number): void {
    this.http.delete(this.env.apiURL + this.env.fieldsPage + id).pipe(
      catchError(this.handleError)
    ).subscribe();
  }

  getCurrentUser(): Observable<UserBasicData> {
    let httpOptions = 
    {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    }
    
    return this.http.get<UserBasicData>(
      this.env.apiURL + this.env.apiUsers + this.env.apiCurrentUser, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getAllUsers(): Observable<UserBasicData[]> {
    return this.http.get<UserBasicData[]>(this.env.apiURL + this.env.apiUsers + this.env.apiAllUsers).pipe(
      catchError(this.handleError)
    );
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
        `code: ${error.status}\n` +
        `body: ${JSON.stringify(error.error)}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
