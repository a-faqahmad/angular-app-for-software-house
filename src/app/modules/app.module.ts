import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { PersonComponent } from '../components/persons/person.component';
import { UtilitiesComponent } from '../components/utilities/utilities.component';
import { HomeComponent } from '../components/home/home.component';
import { PostsComponent } from '../components/posts/posts.component';
import { AppErrorHandler } from '../common/app-error-handler'
import { SignupModule } from './signup.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CreateComponent } from '../components/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    UtilitiesComponent,
    PostsComponent,
    HomeComponent,
    CreateComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SignupModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }    // now anywhere you use 'throw error', it will be caught here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
