import { Component, OnInit, Input } from '@angular/core';
import {Subscription} from 'rxjs' ;
import{EventEmitter} from 'protractor';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() public userInfo;

  constructor() { }

  ngOnInit(): void {
  }
delete(id: number)
{
  
      this.userInfo.splice(id,1);
    }
}
