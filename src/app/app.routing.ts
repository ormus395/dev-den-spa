import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from "./profile/profile.component";
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { JobPostComponent } from "./job-post/job-post.component";
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobAdminComponent } from './job-admin/job-admin.component';
import { LoginComponent } from "../fw/users/login/login.component";
import { SkillsComponent } from './skills/skills.component';
import { RegisterUserComponent } from "../fw/users/register-user/register-user.component";
import { AuthenticatedUserComponent } from "./authenticated-user/authenticated-user.component";
import { AuthGuard } from './services/auth-guard.service';

export const appRoutes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterUserComponent },
    { path: "authenticated", component: AuthenticatedUserComponent, canActivate: [AuthGuard],
        children: [
            { path: '', canActivateChild: [AuthGuard],
                children: [
                    { path: "", redirectTo: "dashboard", pathMatch: "full" }, 
                    { path: "dashboard", component: DashboardComponent }, 
                    { path: "job-list", component: JobListComponent }, 
                    { path: "job-detail/:id/:operation", component: JobDetailComponent }, 
                    { path: "job-admin", component: JobAdminComponent }, 
                    { path: "job-post", component: JobPostComponent }, 
                    { path: "profile", component: ProfileComponent }, 
                    { path: "edit-profile", component: EditProfileComponent }, 
                    { path: "skills", component: SkillsComponent }
                ], 
            }
        ] 
    },
    { path: "", component: LoginComponent }, 
    { path: "**", component: LoginComponent }
];