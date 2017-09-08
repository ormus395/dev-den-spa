import { Component } from '@angular/core';

import { MenuService } from './services/menu.service';
import { ScreenService } from './services/screen.service';
import { AuthService } from "./services/auth.service";
import { initialMenuItems } from './app.initial-menu';
import { devMenuItems } from './app.dev-menu';
import { empMenuItems } from './app.emp-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: any; 

  constructor(private authService: AuthService,
              private menuService: MenuService,
              private screenService: ScreenService){

    if (!this.authService.loggedIn()) {
      menuService.items = initialMenuItems;
      }

    this.authService.getProfile().subscribe(data => {
      console.log(data.user);
      this.user = data.user;

      if(this.user.role=="developer"){
        menuService.items = devMenuItems;
      }

      if(this.user.role=="employer") {
        menuService.items = empMenuItems;
      }

    });   
  }
}
