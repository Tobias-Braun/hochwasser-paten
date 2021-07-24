import { Component, Input } from '@angular/core';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-post-small',
  templateUrl: './post-small.component.html',
  styleUrls: ['./post-small.component.css']
})
export class PostSmallComponent {

  @Input() post: Post | undefined;

  constructor() { }

}
