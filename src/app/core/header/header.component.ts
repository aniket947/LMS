import { Component } from '@angular/core';

@Component({
  selector: 'lms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() { }
  loggedInUserName: string = '';

  ngOnInit() {
    let loggedInUserobj = JSON.parse(sessionStorage.getItem('loggedInUser')!);
    this.loggedInUserName = loggedInUserobj.name;
  }
}