import { Component, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers } from "@angular/http";
import { tokenNotExpired } from "angular2-jwt";

import { JobService } from '../services/job.service';
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  jobs: any;
  users: any;

  constructor(
    private authService: AuthService,
    private jobService: JobService,
    private router: Router
  ) {
    jobService.getJobs().subscribe(data => (this.jobs = data));
    authService.getUsers().subscribe(data => (this.users = data));
  }
  
  // TODO: Rafactor
  // showJobDetail(id: number) {
  //   this.router.navigate(["/job-detail", id, "detail"]);
  // }

  // showUserDetail(id: number) {
  //   this.router.navigate(["/profile", id, "detail"]);
  // }
}
