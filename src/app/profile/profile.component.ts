import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {

  user: Object; 

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.authService.getProfile().subscribe(data => {
      console.log(data.user);
      this.user = data.user;
    });
   }

  ngOnInit() {

  }
}