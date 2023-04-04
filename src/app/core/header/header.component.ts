import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router ) {}
  loggedInUserName: string = '';

  ngOnInit() {
    let loggedInUserobj = JSON.parse(sessionStorage.getItem('loggedInUser')!);
    this.loggedInUserName = loggedInUserobj.name;
  }
  logout() {
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['']);
  }
}