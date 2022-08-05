import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, map, tap } from 'rxjs';
import { PersonsService } from '../../services/persons/persons.service'
import { Person } from '../../common/person'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { url } from '../../common/path'

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  path = url
  persons = <Person[]>[];
  id = <string>""
  constructor(private service: PersonsService, private router: Router) { }
  
  readonly persons$ = this.service.getPersons().pipe(
    map((data) => this.persons = data),
    catchError((err) => {
      console.error(err);
      this.persons = <Person[]>[];
      return EMPTY;
    }),
    tap((data) => console.log(data))
  )
  readonly personToBeDeleted$ = this.service.deletePerson(this.id).pipe(
    catchError((err) => {
      console.error(err);
      this.persons = <Person[]>[];
      return EMPTY;
    })
  )
  
  ngOnInit() {
    this.persons$.subscribe();
  }
  
  form = new FormGroup({
    'first_name': new FormControl('', Validators.required),
    'last_name': new FormControl('', Validators.required),
    'address': new FormControl(''),
    'date_of_bith': new FormControl('', Validators.required)
  });
  
  get first_name() {
    return this.form.get('first_name');
  }
  get last_name() {
    return this.form.get('last_name');
  }
  get adress() {
    return this.form.get('address');
  }
  get date_of_bith() {
    return this.form.get('date_of_birth');
  }
  
  onSubmit() {
    console.log(this.form);
  }
  
  handleUpdate(id: string) {
    this.router.navigate(['/persons/' + id]);
  }
  handleDelete(id: string) {
    this.service.deletePerson(id).subscribe();
    window.location.reload()
  }
}
