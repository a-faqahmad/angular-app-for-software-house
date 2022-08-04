import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../../common/path'
import { Person } from '../../common/person'

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) { }
  
  getPersons() {
    return this.http.get<Person[]>(url + "/api/persons");
  }
  getPerson(id: string) {
    return this.http.get<Person>(url + "/api/persons/" + id);
  }
  createPerson(body: {}) {
    return this.http.post(url + "/api/persons", body);
  }
  updatePerson(id: string, body: {}) {
    return this.http.put(url + "/api/persons/" + id, body);
  }
  deletePerson(id: string) {
    return this.http.delete(url + "/api/persons/" + id)
  }
}
