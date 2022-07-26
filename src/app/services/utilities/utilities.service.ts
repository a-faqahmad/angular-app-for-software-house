import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  utilities = [{ name: "Web Development", cost: 65 }, { name: "App Development", cost: 45 }];
  getUtilities() {
    return this.utilities;
  }
  getNumber(): number {
    return this.utilities.length;
  }
}
