import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FormsModule } from "./forms/forms.module";
import { MenuComponent } from "./menu/menu.component";
import { FieldsModule } from './fields/fields.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    FieldsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
