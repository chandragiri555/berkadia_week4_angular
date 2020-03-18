import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {UserComponent} from "../user/user.component";


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
public firstName: string;
public lastName: string;
public fullName: string;
@Output() public childEvent:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  submitdetails()
  {
    this.fullName=this.firstName+this.lastName;
    this.childEvent.emit(this.fullName);
  }

}
