import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationService } from './user-registration.service';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [
    RegistrationComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserRegistrationService],
  bootstrap: [RegistrationComponent]
})
export class AppModule { }