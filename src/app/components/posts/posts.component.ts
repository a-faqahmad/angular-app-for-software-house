import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, map, tap } from 'rxjs';
import { PostsService } from '../../services/posts/posts.service'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = {};
  constructor(private service: PostsService) { }
  
  readonly posts$ = this.service.getPosts().pipe(
    map((data) => this.posts = data),
    catchError((err) => {
      console.error(err);
      this.posts = {};
      return EMPTY;
    }),
    tap((data) => console.log(data))
  )
  
  ngOnInit() {
    this.posts$.subscribe();
  }

}
