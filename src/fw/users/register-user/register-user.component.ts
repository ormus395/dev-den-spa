import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { UserApi } from "../user-api";

@Component({
  selector: "fw-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.css"]
})
export class RegisterUserComponent {
  formError: string;
  submitting = false;

  constructor(
    private userApi: UserApi, 
    private router: Router) {}

  onSubmit(registerForm: NgForm) {
    if (registerForm.valid) {
      console.log("submitting...", registerForm);
      this.submitting = true;
      this.formError = null;

      this.userApi
        .register(
          registerForm.value.name,
          registerForm.value.username,
          registerForm.value.password,          
          registerForm.value.email,
          registerForm.value.role,
        )
        .subscribe(
          data => {
            console.log("registration valid: ", data);
            this.router.navigate(["/login"]);
          },
          err => {
            this.submitting = false;
            console.log("registration error: ", err);
            this.formError = err;
          }
        );
    }
  }
}
