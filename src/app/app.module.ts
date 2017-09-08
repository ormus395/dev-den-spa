import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { LoginComponent } from "./login/login.component";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { JobDetailComponent } from "./job-detail/job-detail.component";
import { JobPostComponent } from "./job-post/job-post.component";
import { JobListComponent } from "./job-list/job-list.component";
import { ProfileComponent } from "./profile/profile.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { SkillsComponent } from './skills/skills.component';
import { JobService } from './services/job.service';
import { AuthGuard } from './services/auth.guard';
import { RoleGuard } from './services/role.guard';
import { JobAdminComponent } from './job-admin/job-admin.component';
import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { SettingsComponent } from './settings/settings.component';
import { UserService } from './services/user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuService } from './services/menu.service';
import { ScreenService } from './services/screen.service';
import { HomeComponent } from './home/home.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';

export const appRoutes: Routes = [
  // Open routes
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterUserComponent }, 
  { path: "login", component: LoginComponent },

  // Protected routes  
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] }, 
  { path: "job-list", component: JobListComponent, canActivate: [AuthGuard] },  
  { path: "job-detail", component: JobDetailComponent, canActivate: [AuthGuard] }, 
  { path: "job-admin", component: JobAdminComponent, canActivate: [AuthGuard, RoleGuard] }, 
  { path: "edit-job", component: EditJobComponent, canActivate: [AuthGuard] },
  { path: "job-post", component: JobPostComponent, canActivate: [AuthGuard] },  
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },  
  { path: "edit-profile", component: EditProfileComponent, canActivate: [AuthGuard] },  
  { path: "skills", component: SkillsComponent, canActivate: [AuthGuard] },

  // Default routes
  { path: "", component: HomeComponent }, 
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent, 
    LoginComponent,
    AuthenticatedUserComponent,
    RegisterUserComponent, 
    ProfileComponent, 
    EditProfileComponent, 
    EditJobComponent,    
    JobDetailComponent, 
    JobPostComponent, 
    JobListComponent, 
    SkillsComponent, 
    JobAdminComponent, 
    SettingsComponent, 
    NavbarComponent, 
    HomeComponent,
    ScreenLarge, 
    ScreenBelowLarge, 
    MenuComponent, 
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    AuthGuard,
    JobService,
    AuthService,
    RoleGuard,
    ScreenService,
    MenuService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}