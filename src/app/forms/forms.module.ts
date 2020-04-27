import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsComponent } from "./forms.component";

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [FormsComponent]
})
export class FormsModule { }
