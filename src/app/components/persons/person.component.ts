import { Component, OnInit } from '@angular/core';
import { NamesService } from '../../services/names/names.service'

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  _names;
  constructor(names: NamesService) { 
    this._names = names.getNames();
  }

  ngOnInit(): void {
  }

}
