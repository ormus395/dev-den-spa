import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { User } from "../view-models/user";

@Injectable()
export class UserService {
  authToken: any;
  user: any;

  constructor(private http: Http, private router: Router) {}

  registerUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/users/register", user, { headers: headers })
      .map(res => res.json());
  }

  getUsers() {
    return this.http.get("http://localhost:3000/users").map(res => res.json());
  }

  getUser(id) {
    return this.http
      .get("http://localhost:3000/users/" + id)
      .map(res => res.json());
  }

  updateUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/users", user, {
        headers: headers
      })
      .map(res => res.json());
  }

  // SPA user methods
  // login(
  //   username: string,
  //   password: string,
  //   rememberMe: boolean
  // ): Observable<any> {
  //   console.log(
  //     "UserService.login: " + username + " " + password + " " + rememberMe
  //   );
  //   this.isAuthenticated = true;
  //   return Observable.of({}).delay(2000);
  //   //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Invalid Username and/or Password'));
  // }

  // getUsers(): Observable<any> {
  //   return Observable.of(this.users);
  // }

  // getUser(id: number): Observable<User> {
  //   var user = this.users.find(c => c.id == id);
  //   return Observable.of(user);
  // }

  // logout(): Observable<any> {
  //   this.isAuthenticated = false;
  //   this.router.navigate(["/login"]);
  //   return Observable.of({}).delay(2000);
  // }

  // changePassword(username: string, password: string): Observable<any> {
  //   console.log("UserService.changePassword: " + username + " " + password);
  //   this.isAuthenticated = true;
  //   return Observable.of({}).delay(2000);
  // }

  // updateUser(updatedUser: User): Observable<any> {
  //   var user = this.users.find(c => c.id == updatedUser.id);
  //   Object.assign(user, updatedUser);
  //   return Observable.of(user).delay(2000);
  //   //return Observable.of({}).delay(2000).flatMap(x => Observable.throw(''));
  // }

  // ARE THESE METHODS VALID??

  // getDevProfile() {
  //   let headers = new Headers();
  //   this.loadToken();
  //   headers.append("Authorization", this.authToken);
  //   headers.append("Content-Type", "application/json");
  //   return this.http
  //     .get("http://localhost:3000/users/profile/developer", {
  //       headers: headers
  //     })
  //     .map(res => res.json());
  // }

  // getEmpProfile() {
  //   let headers = new Headers();
  //   this.loadToken();
  //   headers.append("Authorization", this.authToken);
  //   headers.append("Content-Type", "application/json");
  //   return this.http
  //     .get("http://localhost:3000/users/profile/employer", {
  //       headers: headers
  //     })
  //     .map(res => res.json());
  // }

  // getDevDashboard() {
  //   let headers = new Headers();
  //   this.loadToken();
  //   headers.append("Authorization", this.authToken);
  //   return this.http
  //     .get("http://localhost:3000/users/developer/dashboard", {
  //       headers: headers
  //     })
  //     .map(res => res.json());
  // }

  // getEmpDashboard() {
  //   let headers = new Headers();
  //   this.loadToken();
  //   headers.append("Authorization", this.authToken);
  //   return this.http
  //     .get("http://localhost:3000/users/employer/dashboard", {
  //       headers: headers
  //     })
  //     .map(res => res.json());
  // }
}