import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { JobService } from "../services/job.service";
import { Job } from "../view-models/job";

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ["./job-list.component.css"]
})
export class JobListComponent {
  jobs: Array<Job>;

  constructor(private jobService: JobService, 
              private router: Router) {
    jobService.getJobs().subscribe(data => (this.jobs = data));
  }

  showJobDetail(id: number) {
    this.router.navigate(["/job-detail", id, "detail"]);
  }
}
