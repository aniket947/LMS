import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) { }
  email: string = '';
  password: string = '';
  loginErrorMsg: string = '';

  login() {
    let userExistObj = this.loginService.authenticateUser(this.email, this.password);
    if (userExistObj) {
      sessionStorage.setItem('loggedInUser', JSON.stringify(userExistObj));
      this.router.navigate(['/lms']);
      //Redirect User to homepage
    }
    else {
      this.loginErrorMsg = 'InvalidUserId or Password';
    }
  }
}
