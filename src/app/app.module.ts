import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobDetailComponent } from "./job-detail/job-detail.component";
import { JobPostComponent } from "./job-post/job-post.component";
import { JobListComponent } from "./job-list/job-list.component";
import { ProfileComponent } from "./profile/profile.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { SkillsComponent } from './skills/skills.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { appRoutes } from "./app.routing";
import { UserService } from './services/user.service';
import { UserApi } from '../fw/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
import { JobAdminComponent } from './job-admin/job-admin.component';
import { AppDataService } from './services/app-data.service';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent, 
    ProfileComponent, 
    EditProfileComponent, 
    JobDetailComponent, 
    JobPostComponent, 
    JobListComponent, 
    SkillsComponent, 
    JobAdminComponent, 
    AuthenticatedUserComponent, 
    SettingsComponent
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
    { 
      provide: UserApi, 
      useExisting: UserService 
    },
    AuthGuard,
    AppDataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
