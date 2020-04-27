import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ItemComponent } from './item/item.component';
import { MenuComponent } from './menu/menu.component';
import { DescriptionComponent } from './description/description.component';
import { FieldsComponent } from './fields/fields.component';
import { FormsComponent } from './forms/forms.component';



@NgModule({
  declarations: [HomeComponent, 
    ItemComponent, 
    MenuComponent, 
    DescriptionComponent, 
    FieldsComponent, 
    FormsComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
