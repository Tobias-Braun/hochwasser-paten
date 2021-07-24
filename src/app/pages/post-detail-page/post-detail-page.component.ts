import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { empty, Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { Profile } from '../../../models/profile';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail-page',
  templateUrl: './post-detail-page.component.html',
  styleUrls: ['./post-detail-page.component.css']
})
export class PostDetailPageComponent implements OnInit {


  public profile$: Observable<Profile> = empty();
  public post$: Observable<Post> = empty();
  postId: string = "";
  profileId: string = "";

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.postId = params['postId'];
      this.profileId = params['profileId'];

      this.profile$ = this.api.getProfileFromId(this.postId);
      this.post$ = this.api.getPostFromId(this.profileId);
    });
     }

}
