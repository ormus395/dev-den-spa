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

  jobs: any[];
  deleteError: string;
  deleteId: number;
  isDeleting = false;
  message: string;

  constructor(private jobService: JobService, 
              private router: Router) {
    jobService.getJobs().subscribe(data => {
      console.log(data)
      this.jobs = data;
    });
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  title: string;
  type: string;
  salary: string;
  author: string;
  details: string;

  createJob() {
    const job = {
      title: this.title,
      type: this.type,
      salary: this.salary,
      author: this.author,
      details: this.details
    }

    this.jobService.addJob(job).subscribe(data => {
      console.log(localStorage.getItem('id_token'));
      console.log(data);
      if(data.success) {
        this.message = 'Job Posted';
        this.router.navigate(['/dashboard']);
      }
    })

  }

    onDeleteClick(id){
        this.jobService.deleteJob(id).subscribe(data => {
          console.log(localStorage.getItem('id_token'));
          console.log("delete: "+data);
        })
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
