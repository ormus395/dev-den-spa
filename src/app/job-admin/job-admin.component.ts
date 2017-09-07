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
  isActive: boolean = false;
  isEditActive: boolean = false;

  constructor(private jobService: JobService, 
              private router: Router) {
    jobService.getJobs().subscribe(data => {
      console.log(data)
      this.jobs = data;
    });
  }

  title: string;
  type: string;
  salary: string;
  author: string;
  details: string;

  toggle() {
    this.isActive = !this.isActive;
  }

  toggleEdit() {
    this.isEditActive = !this.isEditActive;
  }

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
          for(let i =0; i < this.jobs.length; i++) {
                if(this.jobs[i].id == id) {
                    this.jobs.splice(i,1);
                }
            }
        })
    }

  deleteJobQuestion(id: number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editJob(id) {
    const job = {
      title: this.title,
      type: this.type,
      salary: this.salary,
      author: this.author,
      details: this.details
    }
    this.jobService.updateJob(id, job).subscribe(data => {
      if(data) {
        alert('job updated');
      } else {
        alert('error');
      }
    })
  }

  showJobDetail(id: number) {
    this.router.navigate(['/job-detail', id, 'detail']);
  }

}
