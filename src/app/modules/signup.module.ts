import { SignupComponent } from '../components/signup/signup.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    FlexLayoutModule
  ],
  bootstrap: [SignupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignupModule { }
