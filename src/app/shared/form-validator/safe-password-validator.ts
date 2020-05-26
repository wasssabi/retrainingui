import { ValidatorFn, AbstractControl } from '@angular/forms';

export const safePasswordValidator = (errorKey: string = 'safePassword'): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value = control.value;
    if (value) {
      if (!/[A-Z]/.test(value)) {
        return {[errorKey]: 'Password should contain at least one upper case letter'};
      }
  
      if (!/[a-z]/.test(value)) {
        return {[errorKey]: 'Password should contain at least one lower case letter'};
      }
  
      if (!/\d/.test(value)) {
        return {[errorKey]: 'Password should contain at least one digit symbol'};
      }
  
      if (!/\W/.test(value)) {
        return {[errorKey]: 'Password should contain at least one non alfa symbol'};
      }
    }
    return null;
  } 
}  
    