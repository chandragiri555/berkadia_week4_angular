import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'one';
  user=[];
  public leng;
  constructor()
  {

  }
  addDetails(user)
  {
    this.user.push(user);
  }
}
