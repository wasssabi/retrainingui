import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsComponent } from "./forms.component";
import { FormsFilterComponent } from './forms-filter/forms-filter.component';
import { DisplayFormsComponent } from './display-forms/display-forms.component';
import { SearchFormsComponent } from './search-forms/search-forms.component';
import { FormSearchPipe } from './search-forms/form-search.pipe';
@NgModule({
  
 
 declarations: [
    FormsComponent, 
    FormsFilterComponent, 
    DisplayFormsComponent,
    SearchFormsComponent,
    FormSearchPipe
  ],
  imports: [
    CommonModule
  ]
})
export class FormsModulePr { }
