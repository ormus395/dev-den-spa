import { Component } from '@angular/core';

import { FrameworkConfigService } from '../services/framework-config.service';
import { UserApi } from '../users/user-api';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(
    private frameworkConfigService: FrameworkConfigService,
    private userApi: UserApi) { }

  logout() {
    this.userApi.logout();
  }
}
