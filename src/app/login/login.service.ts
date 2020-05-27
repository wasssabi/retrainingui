import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUser } from '../user';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mainUrl = environment.apiURL;
  usersApi = environment.apiUsers;
  loginApi = environment.apiLogin;

  constructor(private http: HttpClient) { }

  public login(user: LoginUser): Observable<any> {
    return this.http.post(this.mainUrl + this.usersApi + this.loginApi, user, {responseType: 'json'});
  }
}
