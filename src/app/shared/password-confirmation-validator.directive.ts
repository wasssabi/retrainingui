import { ValidatorFn, FormGroup } from '@angular/forms';

export const passwordConfirmationValidator = (passwordField: string, confirmPasswordField: string): ValidatorFn => {
  return (group: FormGroup): {[key: string]: any} | null => {
    const passwordInput = group.controls[passwordField];
    const passwordConfirmationInput = group.controls[confirmPasswordField];

    const passwordValue = passwordInput?.value ?? '';
    const confirmPasswordValue = passwordConfirmationInput?.value ?? '';

    const isEqual = passwordValue === confirmPasswordValue;
    return isEqual ? null : { 'passwordConfirmation': true };
  };
};
