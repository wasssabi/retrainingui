import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { UserRegistrationService } from './user-registration.service';

import { passwordConfirmationValidator } from '../shared/password-confirmation-validator.directive';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: UserRegistrationService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: [
        '',
        [Validators.required, Validators.maxLength(28)]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ],
      passwordConfirm: [
        '',
        [Validators.required]
      ],
    }, { validator: passwordConfirmationValidator('password', 'passwordConfirm') });
  }

  get form() { return this.registrationForm.controls; }

  public signUp(): void {
    const response = this.service.register(this.registrationForm.value);
    response.subscribe(data => {
      alert(data);
    });
  }
}
