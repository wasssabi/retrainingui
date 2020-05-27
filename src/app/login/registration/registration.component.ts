import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

import { UserRegistrationService } from './user-registration.service';

import { passwordConfirmationValidator } from '../../shared/form-validator/password-confirmation-validator.directive';
import { ApplicationLengthsEnum } from 'src/app/shared/consts';
import { APPLICATION_LENGTHS } from 'src/app/shared/consts-injection-tokens';
import { safePasswordValidator } from 'src/app/shared/form-validator/safe-password-validator';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: UserRegistrationService,
    @Inject(APPLICATION_LENGTHS) public appLengthsConst: typeof ApplicationLengthsEnum) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: [
        '',
        [Validators.required, Validators.maxLength(this.appLengthsConst.MAX_USERNAME_LENGTH)]
      ],
      password: [
        '',
        [
          Validators.required, 
          Validators.minLength(this.appLengthsConst.MIN_PASSWORD_LENGTH),
          safePasswordValidator()
        ]
      ],
      passwordConfirm: [
        '',
        [Validators.required]
      ],
    }, { validator: passwordConfirmationValidator('password', 'passwordConfirm') });
  }

  get form() { return this.registrationForm.controls; }

  public signUp(): void {
    console.log(this.form);
    const response = this.service.register(this.registrationForm.value);
    response.pipe(
      catchError(this.handleError)
    ).subscribe(data => {
      alert(data);
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
