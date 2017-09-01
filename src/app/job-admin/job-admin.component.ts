import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Job } from '../view-models/job';

@Component({
  selector: "app-job-admin",
  templateUrl: "./job-admin.component.html",
  styleUrls: ["./job-admin.component.css"]
})
export class JobAdminComponent {

  jobs: Array<Job>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private dataService: AppDataService, 
              private router: Router) {
    dataService.getJobs().subscribe((data) => this.jobs = data);
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  createJob() {
    this.router.navigate(['/authenticated/job-detail', 0, 'create']);
  }

  deleteJob(id: number) {
    this.isDeleting = true;
    this.dataService.deleteJob(id).subscribe(
      c => this.cancelDelete(),
      err => { this.deleteError = err; this.isDeleting = false; }
    );
  }

  deleteJobQuestion(id: number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editJob(id: number) {
    this.router.navigate(['/authenticated/job-detail', id, 'edit']);
  }

  showJobDetail(id: number) {
    this.router.navigate(['/authenticated/job-detail', id, 'detail']);
  }

}
