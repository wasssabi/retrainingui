import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldsComponent } from './fields.component';
import { FieldsFilterComponent } from './fields-filter/fields-filter.component';
import { DisplayFieldsComponent } from './display-fields/display-fields.component';
import { SearchFieldsComponent } from './search-fields/search-fields.component';
import { FieldSearchPipe } from './search-fields/field-search.pipe';
import { FieldFilterPipe } from './display-fields/field-filter.pipe';
import { FieldOrderByPipe } from './display-fields/field-order.pipe';
import { FieldSharedPipe } from './display-fields/field-shared.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FieldsComponent,
    FieldsFilterComponent,
    DisplayFieldsComponent,
    SearchFieldsComponent,
    FieldSearchPipe,
    FieldFilterPipe,
    FieldOrderByPipe,
    FieldSharedPipe

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FieldsModule { }
