import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { FormsComponent } from "./forms/forms.component";
import { FieldsComponent } from "./fields/fields.component";
import { GroupsComponent } from "./groups/groups.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'fields', component: FieldsComponent},
  {path: 'groups', component: GroupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
