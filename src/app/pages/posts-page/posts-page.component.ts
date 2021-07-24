import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { empty } from 'rxjs';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  constructor(private api: ApiService) { }

  public posts$: Observable<Post[]> = empty();

  ngOnInit(): void {
    this.posts$ = this.api.getPosts();
  }

}
