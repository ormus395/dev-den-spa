import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { JobService } from "../services/job.service";

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ["./job-list.component.css"]
})
export class JobListComponent {
  jobs: Array<any>;

  constructor(private jobService: JobService, 
              private router: Router) {
    jobService.getJobs().subscribe(data => (this.jobs = data));
  }

  // TODO: Rafactor
  // showJobDetail(id: number) {
  //   this.router.navigate(["/job-detail", id, "detail"]);
  // }
}
