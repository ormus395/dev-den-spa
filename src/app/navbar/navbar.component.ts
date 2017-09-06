import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: object;

  constructor(private authService: AuthService,
              private router: Router
  ) { }

  ngOnInit() {

  }

  logout(){
    this.authService.logout();
    return false;
  }
}
