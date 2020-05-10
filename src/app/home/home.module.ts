import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ItemComponent } from './item/item.component';
import { DescriptionComponent } from './description/description.component';
import { HomeFieldsContainerComponent } from './home-fields-container/home-fields-container.component';
import { HomeFormsContainerComponent } from './home-forms-container/home-forms-container.component';



@NgModule({
  declarations: [
    HomeComponent, 
    ItemComponent,
    DescriptionComponent, 
    HomeFormsContainerComponent, 
    HomeFieldsContainerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
