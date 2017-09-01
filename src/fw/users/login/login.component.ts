import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserApi } from '../user-api';

@Component({
  selector: 'fw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  formError: string;
  submitting = false;

  constructor(private userApi: UserApi,
              private router: Router) { }

  onSubmit(loginForm: NgForm) {
    
    if (loginForm.valid) {

      console.log('submitting...', loginForm);
      this.submitting = true;
      this.formError = null;

      this.userApi.login(
          loginForm.value.username, 
          loginForm.value.password, loginForm.value.rememberMe)
        .subscribe((data) => {
          console.log('login valid: ', data);
          this.router.navigate(['/authenticated']);
        },
        (err) => {
          this.submitting = false;
          console.log('login error: ', err);
          this.formError = err;
        }
      );
    }
  }
}
