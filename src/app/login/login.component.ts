import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { LoginService } from '../login/login.service';
import { HomeService } from '../home/home.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

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
    private homeService: HomeService,
    private router: Router) { }

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
      this.homeService.setToken(data.token.toString());
      this.loginForm.reset();
      this.router.navigate(['home']);
      alert('Logged in');
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `code: ${error.status}\n` +
        `message: ${error.error.message}\n` +
        `body: ${JSON.stringify(error.error)}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getCurrentUser() {
    this.homeService.getCurrentUser().subscribe(
      data => console.log(data));
  }
}
