import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { catchError, EMPTY, map, tap } from 'rxjs';
import { PersonsService } from '../../services/persons/persons.service';
import { Person } from '../../common/person'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  persons = <Person[]>[];
  person = <Person> new Person;
  id = ""
  profileImage: any;
  
  readonly person$ = this.service.getPerson(this.activatedRoute.snapshot.params['id']).pipe(
    map((data) => this.person = data),
    catchError((err) => {
      console.error('error: ', err);
      return EMPTY;
    }),
    tap(()=>{
      this.form.setValue({
        first_name: this.person.first_name,
        last_name: this.person.last_name,
        address: this.person.address,
        date_of_birth: this.person.date_of_birth,
        photo_id: this.person.photo_id
      })
    })
  )
  
  constructor(
    private service: PersonsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef
  ) { }
  
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id) {
      this.person$.subscribe()
    }
  }
  
  imageUpload(event:any)
  {
    var file = event.target.files.length;
    for(let i=0;i<file;i++)
    {
       var reader = new FileReader();
       reader.onload = (event:any) => 
       {
           this.profileImage = event.target.result;
           this.form.get('photo_id')?.patchValue(this.profileImage)
           this.changeDetector.detectChanges();
       }
       reader.readAsDataURL(event.target.files[i]);
    }
  }
  
  body = {};
  form = new FormGroup({
    'first_name': new FormControl('', Validators.required),
    'last_name': new FormControl('', Validators.required),
    'address': new FormControl(''),
    'date_of_birth': new FormControl('', Validators.required),
    'photo_id': new FormControl('')
  })
  
  get first_name() {
    return this.form.get('first_name');
  }
  get last_name() {
    return this.form.get('last_name');
  }
  get address() {
    return this.form.get('address');
  }
  get date_of_birth() {
    return this.form.get('date_of_birth');
  }
  get photo_id() {
    return this.form.get('photo_id');
  }
  
  onSubmit() {
    if (!this.form.valid) return;
    this.body = {
      first_name: this.first_name?.value,
      last_name: this.last_name?.value,
      date_of_birth: this.date_of_birth?.value,
      address: this.address?.value,
      photo_id: this.photo_id?.value
    }
    console.log(this.body)
    
    if (!this.id) {
      console.log(this.id);
      this.service.createPerson(this.body).subscribe();
    } else {
      this.service.updatePerson(this.activatedRoute.snapshot.params['id'], this.body).subscribe()
    }
    this.router.navigate(['']); 
  }
}
