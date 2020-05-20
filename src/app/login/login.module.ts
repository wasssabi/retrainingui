import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [LoginComponent]
})
export class AppModule { }