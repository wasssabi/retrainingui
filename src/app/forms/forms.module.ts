import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { FormsComponent } from "./forms.component";
import { FormsFilterComponent } from './forms-filter/forms-filter.component';
import { DisplayFormsComponent } from './display-forms/display-forms.component';
import { SearchFormsComponent } from './search-forms/search-forms.component';
import { FormSearchPipe } from './search-forms/form-search.pipe';
import { FormFilterPipe } from './display-forms/form-filter.pipe';
import { FormOrderByPipe } from './display-forms/form-order.pipe';

@NgModule({
 declarations: [
    FormsComponent, 
    FormsFilterComponent, 
    DisplayFormsComponent,
    SearchFormsComponent,
    FormSearchPipe,
    FormFilterPipe,
    FormOrderByPipe    
  ],
  imports: [
    CommonModule,
    FormsModule    
  ]
})
export class FormsModulePr { }
