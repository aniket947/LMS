import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    userData = [{ "Id": 1, "email": 'admin@gmail.com', "img": "", "name": 'Admin', "pwd": 'Admin@123' },
    { "Id": 2, "email": 'piyushb8@gmail.com', "img": "", "name": 'Piyush', "pwd": 'Piyush@123' }]
    constructor() { }

    authenticateUser(emailId: string, password: string) {
        const userExist = this.userData.find(user => user.email == emailId && user.pwd == password);
        if (userExist) {
            return userExist;
        }
        return false;
    }
}   