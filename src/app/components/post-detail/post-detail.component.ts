import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() public post: Post | undefined | null;

  constructor() { }

  ngOnInit(): void {
  }

}
