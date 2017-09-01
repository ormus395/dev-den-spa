import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { UserApi } from '../../fw/users/user-api';

@Injectable()
export class UserService implements UserApi {
  isAuthenticated = false;

  constructor(private router: Router) {}

  register(
    role: string,      
    name: string,
    username: string,
    email: string,    
    password: string
  ) : Observable<any> {
    console.log(
        "UserService.register: " + role + " " + name + " " + username + " " + email + " " + password
    );
    this.isAuthenticated = true;
    return Observable.of({}).delay(2000);

  }

  login(
    username: string,
    password: string,
    rememberMe: boolean
  ): Observable<any> {
    console.log(
      "UserService.login: " + username + " " + password + " " + rememberMe);
    this.isAuthenticated = true;
    return Observable.of({}).delay(2000);
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Invalid Username and/or Password'));
  }

  logout(): Observable<any> {
    this.isAuthenticated = false;
    this.router.navigate(["/login"]);
    return Observable.of({}).delay(2000);
  }

  changePassword(
    username: string,
    password: string
  ): Observable<any> {
      console.log("UserService.changePassword: " + username + " " + password);
      this.isAuthenticated = true;
      return Observable.of({}).delay(2000);
  }

}