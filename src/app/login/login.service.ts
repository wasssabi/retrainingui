import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUser } from "../user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login(user: LoginUser): Observable<any> {
    return this.http.post('http://localhost:8080/auth/login/', user, {responseType: 'json'});
  }
}
