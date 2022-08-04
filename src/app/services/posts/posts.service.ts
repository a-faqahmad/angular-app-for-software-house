import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../../common/path'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  
  getPosts() {
    return this.http.get(url + "/api/persons");
  }
}
