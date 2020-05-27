import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { LoginService } from '../login/login.service';
import { HomeService } from '../home/home.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private homeService: HomeService) { }

  ngOnInit(): void {
    this.loginFormGeneration();
  }

  loginFormGeneration() {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [Validators.required, Validators.maxLength(28)]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ]
    });
  }

  get form() { return this.loginForm.controls; }

  public login(): void {
    this.loginService.login(this.loginForm.value).pipe(
      catchError(this.handleError)
    ).subscribe(data => {
      this.homeService.setToken(JSON.stringify(data.token));
      this.loginForm.reset();
      alert('Logged in');
    });
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
