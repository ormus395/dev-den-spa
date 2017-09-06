import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { AuthService } from '../services/auth.service';

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"]
})
export class EditProfileComponent implements OnInit {
  user: Object;
  fname: string;
  lname: string;
  username: string;
  role: string;
  email: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(data => {
      console.log("load: "+data.user);
      this.user = data.user;
    });
  }

  onSubmit() {
    const user = {
      fname: this.fname,
      lname: this.lname,
      username: this.username, 
      email: this.email,
      role: this.role
    };
      this.authService.updateUser(user).subscribe(user => {
        console.log("update: "+user);
        this.router.navigate(["/profile"]);
    });
  }

  onDelete() {
    this.authService.deleteUser().subscribe(data => {
      console.log("delete: "+data);
      localStorage.clear();
      this.router.navigate(['/register']);
    })
  }

}
