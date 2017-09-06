import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { tokenNotExpired } from "angular2-jwt";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

import { User } from "../view-models/user";

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private router: Router,
              private http: Http
  ) {}

  authenticateUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/users/authenticate", user, {
        headers: headers
      })
      .map(res => res.json());
  }

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
  //TODO Refactor
  // getUser() {
  //   return this.http.get("http://localhost:3000/users/").map(res => res.json());
  // }

  //Update user method, accessed in editprofile component
  updateUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Authorization', localStorage.getItem('id_token'))
    return this.http
      .put("http://localhost:3000/users/profile", user, {
        headers: headers
      })
      .map(res => res.json());
  }

  //Delete a user
  deleteUser() {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('id_token'));
    return this.http.delete('http://localhost:3000/users/profile', {headers: headers})
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    // this.loadToken();
    // headers.append("Authorization", this.authToken);
    headers.append('Authorization', localStorage.getItem('id_token'));    
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/profile", {
        headers: headers
      })
      .map(res => res.json());
  }
  
  storeUserData(token, user) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired("id_token");
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}  