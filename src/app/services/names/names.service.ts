import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  getNames() {
    return ['afafa', 'nush', 'murshad', 'faidi', 'hasir']
  }
  constructor() { }
}
