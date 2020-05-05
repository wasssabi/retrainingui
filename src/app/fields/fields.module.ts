import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldsComponent } from "./fields.component";
import { FieldsFilterComponent } from './fields-filter/fields-filter.component';
import { DisplayFieldsComponent } from './display-fields/display-fields.component';
import { SearchFieldsComponent } from './search-fields/search-fields.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FieldSearchPipe } from './search-fields/field-search.pipe';


@NgModule({
  declarations: [
    FieldsComponent,
    FieldsFilterComponent,
    DisplayFieldsComponent,
    SearchFieldsComponent,
    FieldSearchPipe

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class FieldsModule { }
