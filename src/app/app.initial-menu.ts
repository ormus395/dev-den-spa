import { MenuItem } from './services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: "Register",
        icon: "glyphicon-user",
        route: "/login"
    },
    {
        text: "Login",
        icon: "glyphicon-log-in",
        route: "/login"
    }
];

// <nav class="navbar navbar-inverse" cursor="pointer">
// <div class="container-fluid">
//     <div class="navbar-header">
//         <a routerLink="/"><div id="logo"></div></a>
//     </div>
//     <ul class="nav navbar-nav">
//         <li *ngIf="!authService.loggedIn()"><a routerLink="/register"><span class="glyphicon glyphicon-user"></span>Register</a></li>          
//         <li *ngIf="!authService.loggedIn()"><a routerLink="/login"><span class="glyphicon glyphicon-log-in"></span>Login</a></li>       
//         <li *ngIf="authService.loggedIn()"><a (click)="logout()" routerLink="/login"><span class="glyphicon glyphicon-log-out"></span>Logout</a></li> 
//         <li *ngIf="authService.loggedIn()"><a id="navbar-text">Hello {{user.fname}} {{user.lname}}</a></li>
//         <li *ngIf="!authService.loggedIn()"><a id="navbar-text">Not Logged in</a></li>                                                   
//     </ul>
//     <ul class="nav navbar-nav navbar-right" *ngIf="authService.loggedIn()">      
//         <li><a routerLink="/dashboard"><span class="glyphicon glyphicon-dashboard"></span>Dashboard</a></li> 
//         <li><a routerLink="/skills"><span class="glyphicon glyphicon-tasks"></span>Skills</a></li>             
//         <li><a routerLink="/profile"><span class="glyphicon glyphicon-list-alt"></span>Profile</a></li> 
//         <li><a routerLink="/job-list"><span class="glyphicon glyphicon-briefcase"></span>Open Jobs</a></li>
//         <li><a *ngIf="roleGuard.canActivate()" routerLink="/job-admin"><span class="glyphicon glyphicon-cog"></span>Job Admin</a></li>      
//     </ul>
// </div>
// </nav>