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
import { ProfileDetailComponent } from "./profile-detail/profile-detail.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { SkillsComponent } from './skills/skills.component';
import { JobService } from './services/job.service';
import { AuthGuard } from './services/auth-guard';
import { JobAdminComponent } from './job-admin/job-admin.component';
import { AuthService } from './services/auth-service';
import { SettingsComponent } from './settings/settings.component';
import { UserService } from './services/user.service';
import { NavbarComponent } from './navbar/navbar.component';

export const appRoutes: Routes = [
  { path: "register", component: RegisterUserComponent }, 
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] }, 
  { path: "job-list", component: JobListComponent, canActivate: [AuthGuard] },  
  { path: "job-detail/:id/:operation", component: JobDetailComponent, canActivate: [AuthGuard] }, 
  { path: "job-admin", component: JobAdminComponent, canActivate: [AuthGuard] },  
  { path: "job-post", component: JobPostComponent, canActivate: [AuthGuard] },  
  { path: "profile-detail", component: ProfileDetailComponent, canActivate: [AuthGuard] },  
  { path: "edit-profile", component: EditProfileComponent, canActivate: [AuthGuard] },  
  { path: "skills", component: SkillsComponent, canActivate: [AuthGuard] },
  { path: "", component: LoginComponent }, 
  { path: "**", component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent, 
    LoginComponent,
    AuthenticatedUserComponent,
    RegisterUserComponent, 
    ProfileDetailComponent, 
    EditProfileComponent, 
    JobDetailComponent, 
    JobPostComponent, 
    JobListComponent, 
    SkillsComponent, 
    JobAdminComponent, 
    SettingsComponent, NavbarComponent
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
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}