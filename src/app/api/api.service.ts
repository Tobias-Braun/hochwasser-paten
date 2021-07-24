import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Post } from '../../models/post';

const API_URL = "http://localhost:3000/"

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  public posts: Post[] = [];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http
      .get<Post[]>(API_URL + "posts")
      .pipe(
        tap(
          (data: Post[]) => console.log(data),
        ),
      ).subscribe({
        next: (data: Post[]) => this.posts = data,
        error: (data: Post[]) => console.log(data)
      });
  }

  public getPosts(): Observable<Post[]> {
    return this.http
    .get<Post[]>(API_URL + "posts")
    .pipe(
      tap(
        (data: Post[]) => console.log(data),
      ),
    );
  }
}
