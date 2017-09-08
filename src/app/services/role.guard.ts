import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';

@Injectable()
export class RoleGuard implements CanActivate {

    user: any;
    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    canActivate() {
        let role = localStorage.getItem('role');
        if(role == 'developer') {
            return false;
        } else {
            return true;
        }
    }
}