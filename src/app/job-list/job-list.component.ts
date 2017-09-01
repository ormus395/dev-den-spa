import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AppDataService } from "../services/app-data.service";
import { Job } from "../view-models/job";

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ["./job-list.component.css"]
})
export class JobListComponent {
  jobs: Array<Job>;

  constructor(private dataService: AppDataService, 
              private router: Router) {
    dataService.getJobs().subscribe(data => (this.jobs = data));
  }

  showJobDetail(id: number) {
    this.router.navigate(["/authenticated/job-detail", id, "detail"]);
  }
}
