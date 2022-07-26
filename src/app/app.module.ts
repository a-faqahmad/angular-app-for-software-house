import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/persons/person.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    UtilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
