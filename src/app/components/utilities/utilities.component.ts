import { UtilitiesService } from './../../services/utilities/utilities.service';
import { Component } from '@angular/core';

@Component({
  selector: 'utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.css']
})
export class UtilitiesComponent {

  number;
  utilities;
  constructor(utilities: UtilitiesService) { 
    this.number = utilities.getNumber();
    this.utilities = utilities.getUtilities();
  }

}
