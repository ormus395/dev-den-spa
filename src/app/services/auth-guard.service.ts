import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private userService: UserService, 
        private router: Router) {}

    canActivate() : boolean {
        console.log('AuthGuard#canActivate called: ' + this.userService.isAuthenticated );

        if (!this.userService.isAuthenticated) {
            console.log('user not authorized...');
            this.router.navigate(['/login']);
        }
        return this.userService.isAuthenticated;
    }

    canActivateChild() : boolean {
        return this.canActivate();
    }
}