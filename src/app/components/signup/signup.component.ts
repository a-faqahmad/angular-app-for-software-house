import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form = new FormGroup({
    'first_name': new FormControl('', Validators.required),
    'last_name': new FormControl('', Validators.required),
    'address1': new FormControl('', Validators.required),
    'address2': new FormControl(''),
    'city': new FormControl('', Validators.required),
    'state': new FormControl('', Validators.required),
    'country': new FormControl('', Validators.required),
    'code': new FormControl('', Validators.required),
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.pattern('/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]')
    ]),
    'sameAddress': new FormControl(false),
    'formType': new FormControl('create'),  //'create' or 'guest'
    'confirm_password': new FormControl('', Validators.required)
  });

  get first_name() {
    return this.form.get('first_name');
  }
  get last_name() {
    return this.form.get('last_name');
  }
  get address1() {
    return this.form.get('address1');
  }
  get city() {
    return this.form.get('city');
  }
  get state() {
    return this.form.get('state');
  }
  get country() {
    return this.form.get('country');
  }
  get code() {
    return this.form.get('code');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get confirm_password() {
    return this.form.get('confirm_password');
  }

  matchPasswords() {
    if (this.password?.value !== this.confirm_password?.value) return false;
    return true;
  }

  onSubmit() {
    console.log(this.password?.value, this.confirm_password?.value);
    if (!this.form.valid) return;
    if (!this.matchPasswords()) return;
    console.log(this.form);
  }

}
