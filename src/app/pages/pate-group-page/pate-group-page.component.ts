import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from 'src/models/offer';
import { Profile } from 'src/models/profile';
import { PateGroup } from '../../../models/pate-group';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-pate-group-page',
  templateUrl: './pate-group-page.component.html',
  styleUrls: ['./pate-group-page.component.css']
})
export class PateGroupPageComponent {

  @Input() public group: PateGroup | undefined = undefined;

  constructor(private api: ApiService) { }


}
