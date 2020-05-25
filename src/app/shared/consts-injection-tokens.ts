import { InjectionToken } from '@angular/core';
import { ApplicationLengthsEnum } from './consts';

export const APPLICATION_LENGTHS = new InjectionToken<typeof ApplicationLengthsEnum>('Application const lengths',
{ 
  providedIn: 'root', factory: () => ApplicationLengthsEnum 
});