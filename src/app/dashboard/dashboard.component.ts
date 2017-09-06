import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { tokenNotExpired } from "angular2-jwt";

import { JobService } from '../services/job.service';
import { UserService } from "../services/user.service";
import { Job } from "../view-models/job";
import { User } from "../view-models/user";

// TODO Deprecate
// import { AppDataService } from "../services/app-data.service";
// import { UserService } from '../services/user.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  jobs: Array<Job>;
  users: Array<User>;

  constructor(
    private userService: UserService,
    private jobService: JobService,
    private router: Router
  ) {
    jobService.getJobs().subscribe(data => (this.jobs = data));
    userService.getUsers().subscribe(data => (this.users = data));
  }

  showJobDetail(id: number) {
    this.router.navigate(["/job-detail", id, "detail"]);
  }

  showUserDetail(id: number) {
    this.router.navigate(["/profile-detail", id, "detail"]);
  }
}
