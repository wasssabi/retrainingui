import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsComponent } from "./forms.component";
import { FormsFilterComponent } from './forms-filter/forms-filter.component';
import { FormsItemComponent } from './forms-item/forms-item.component';

@NgModule({
  declarations: [FormsComponent, FormsFilterComponent, FormsItemComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [FormsComponent]
})
export class FormsModule { }
