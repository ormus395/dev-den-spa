import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { JobService } from '../services/job.service';
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

  constructor(private jobService: JobService, 
              private router: Router) {
    jobService.getJobs().subscribe((data) => this.jobs = data);
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  createJob() {
    this.router.navigate(['/job-detail', 0, 'create']);
  }

  deleteJob(id: number) {
    this.isDeleting = true;
    this.jobService.deleteJob(id).subscribe(
      c => this.cancelDelete(),
      err => { this.deleteError = err; this.isDeleting = false; }
    );
  }

  deleteJobQuestion(id: number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editJob(id: number) {
    this.router.navigate(['/job-detail', id, 'edit']);
  }

  showJobDetail(id: number) {
    this.router.navigate(['/job-detail', id, 'detail']);
  }

}
