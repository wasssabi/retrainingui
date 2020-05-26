import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { FieldsComponent } from './fields/fields.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'fields', component: FieldsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
