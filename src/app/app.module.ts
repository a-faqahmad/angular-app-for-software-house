import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/persons/person.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { PostsComponent } from './components/posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler'

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    UtilitiesComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }    // now anywhere you use 'throw error', it will be caught here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
