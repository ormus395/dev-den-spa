import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { UserService } from '../services/user.service';
// import { UserApi } from "../../fw/users/user-api";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"]
})
export class EditProfileComponent {
  formError: string;
  submitting = false;
  message: string;

  name: string;
  username: string;
  role: string;
  email: string;

  constructor(private userService: UserService,
              private router: Router) {}

  onSubmit(updateForm: NgForm) {
    const user = {
      name: this.name,
      username: this.username, 
      role: this.role,
      email: this.email
    };

    if (updateForm.valid) {
      console.log("submitting...", updateForm);
      this.submitting = true;
      this.formError = null;

      this.userService.updateUser(user).subscribe(data => {
        if (data.success) {
          this.message = "Updating Profile...";
          this.router.navigate(["/profile-detail"]);
        } else {
          this.message = "Update failed...";
          this.router.navigate(["/profile-detail"]);
        }
      });

    }
  }
}
