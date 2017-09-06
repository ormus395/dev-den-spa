import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { UserService } from "../services/user.service";
import { AuthService } from '../services/auth-service';

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.css"]
})

export class RegisterUserComponent implements OnInit{
  message: string;

  name: string;
  username: string;
  role: string;
  email: string;
  password: string;
  

  constructor(
    private authService: AuthService,
    private userService: UserService, 
    private router: Router) {}

  ngOnInit(){}

  onRegister() {
    const user = {
      name: this.name,
      username: this.username,
      role: this.role,
      email: this.email,
      password: this.password
    }    
    
    this.userService.registerUser(user).subscribe(data => {
      console.log(data);
      if(data.success){
        this.router.navigate(['/login']);
      } else {
        this.message = "Registration error...";
        this.router.navigate(['/register']);
      }
    })

  }
}
