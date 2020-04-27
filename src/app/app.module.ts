import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './home/item/item.component';
import { MenuComponent } from './menu/menu.component';
import { DescriptionComponent } from './home/description/description.component';
import { FieldsComponent } from './home/fields/fields.component';
import { FormsComponent } from './home/forms/forms.component';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    ItemComponent, 
    MenuComponent, 
    DescriptionComponent, 
    FieldsComponent, 
    FormsComponent, GroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
