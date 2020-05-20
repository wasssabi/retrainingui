import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { LoginService } from "../login/login.service";
import { token } from "../token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService) { }

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
    this.loginService.login(this.loginForm.value)
    .subscribe(data => {
      JSON.stringify(data.token);
    });
  }

}
