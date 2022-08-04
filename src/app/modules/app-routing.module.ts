import { PersonComponent } from './../components/persons/person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../components/signup/signup.component'
import { CreateComponent } from '../components/create/create.component';

const routes: Routes = [
  {path: '', component: PersonComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'create', component: CreateComponent},
  {path: 'persons/:id', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
