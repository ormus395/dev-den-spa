import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit{
  message: string;

  username: string;
  password: string;

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit(){}
  
  onSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {
      console.log(data);
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.message = "Logging in...";
        this.router.navigate(['/dashboard']);
      }else {
        this.message = "Login error...";
        this.router.navigate(['/login']);
      }
    })
  }
}