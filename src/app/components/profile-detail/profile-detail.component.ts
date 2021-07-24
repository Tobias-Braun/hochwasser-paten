import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/models/profile';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  @Input() public profile: Profile | undefined | null;

  constructor() { }

  ngOnInit(): void {
  }

}
