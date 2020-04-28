import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsComponent } from "./forms.component";
import { FormsFilterComponent } from './forms-filter/forms-filter.component';

@NgModule({
  declarations: [FormsComponent, FormsFilterComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [FormsComponent]
})
export class FormsModule { }
