import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ItemComponent } from './item/item.component';
import { DescriptionComponent } from './description/description.component';
import { HomeFieldsContainerComponent } from './home-fields-container/home-fields-container.component';
import { HomeFormsContainerComponent } from './home-forms-container/home-forms-container.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    HomeComponent, 
    ItemComponent,
    DescriptionComponent, 
    HomeFormsContainerComponent, 
    HomeFieldsContainerComponent, ModalComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
