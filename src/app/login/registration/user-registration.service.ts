import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationUser } from '../../user';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  mainUrl = environment.apiURL;
  usersApi = environment.apiUsers;
  registrationApi = environment.apiRegistration;

  constructor(private http: HttpClient) { }

  public register(user: RegistrationUser): Observable<any> {
    console.log(user);
    return this.http.post(this.mainUrl + this.usersApi + this.registrationApi, user, {responseType: 'json'});
  }
}
