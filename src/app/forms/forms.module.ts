import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsComponent } from "./forms.component";
import { FormsFilterComponent } from './forms-filter/forms-filter.component';
import { FormsItemComponent } from './forms-item/forms-item.component';
import { SearchFormsComponent } from './search-forms/search-forms.component';

@NgModule({
  declarations: [FormsComponent, FormsFilterComponent, FormsItemComponent, SearchFormsComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [FormsComponent]
})
export class FormsModulePr { }
