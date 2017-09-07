import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import {RoleGuard} from '../services/role.guard';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: object;

  constructor(private authService: AuthService,
              private router: Router,
              private roleGuard: RoleGuard
  ) {
    this.authService.getProfile().subscribe(data => {
      console.log(data.user);
      this.user = data.user;
    });
   }

  ngOnInit() {

  }

  logout(){
    this.authService.logout();
  }
}
