import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from "../fw/services/framework-config.service";
import { MenuService } from '../fw/services/menu.service';
import { devMenu } from './app.dev.menu';
import { empMenu } from './app.emp.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor (private frameworkConfigService: FrameworkConfigService, 
               private menuService: MenuService){

    let config: FrameworkConfigSettings = { 
      showLanguageSelector: true, 
      showUserControls: true, 
      showStatusBar: true, 
      showStatusBarBreakpoint: 800 
    };

    frameworkConfigService.configure(config);

    menuService.items = devMenu;

  }
}
