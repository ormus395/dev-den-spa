import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { UserService } from "../services/user.service";
import { User } from "../view-models/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: User;

  errorMessage: string;
  operation: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.operation = this.route.snapshot.params["operation"];

    this.userService
      .getUser(this.route.snapshot.params["id"])
      .subscribe((user: User) => (this.user = user));
  }

  updateUser(user: User) {
    this.errorMessage = null;
    this.userService
      .updateUser(user)
      .subscribe(
        c => this.router.navigate(["/edit-profile"]),
        err => (this.errorMessage = "Error updating User...")
      );
  }


}


  // userDefninition: Array<FieldDefinition> = [
  //   {
  //     key: "id",
  //     type: "number",
  //     isId: true,
  //     label: "Id",
  //     required: true
  //   },
  //   {
  //     key: "name",
  //     type: "string",
  //     isId: false,
  //     label: "Name",
  //     required: true
  //   },
  //   {
  //     key: "role",
  //     type: "string",
  //     isId: false,
  //     label: "Role",
  //     required: true
  //   },
  //   {
  //     key: "username",
  //     type: "string",
  //     isId: false,
  //     label: "Username",
  //     required: true
  //   },
  //   {
  //     key: "email",
  //     type: "string",
  //     isId: false,
  //     label: "Email",
  //     required: true
  //   }
  // ];