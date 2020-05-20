import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationUser } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public register(user: RegistrationUser): Observable<any> {
    return this.http.post('http://localhost:8080/registration/registr', user, {responseType: 'json'});
  }
}
