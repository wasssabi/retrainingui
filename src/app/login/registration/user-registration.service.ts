import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationUser } from '../../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  public register(user: RegistrationUser): Observable<any> {
    console.log(user);
    return this.http.post('http://localhost:8080/auth/registration/', user, {responseType: 'json'});
  }
}
