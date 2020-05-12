import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FormsModulePr } from "./forms/forms.module";
import { MenuComponent } from "./menu/menu.component";
import { FieldsModule } from './fields/fields.module';
import { RegistrationComponent } from './registration/registration.component';
import { UserRegistrationService } from './registration/user-registration.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistrationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModulePr,
    FieldsModule,
    HttpClientModule, 
    ReactiveFormsModule
],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
