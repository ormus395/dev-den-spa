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
  id: any;
  title: string;
  type: string;
  salary: string;
  author: string;
  details: string;
  isActive: boolean = false;
  isEdit: boolean = false;

  constructor(private jobService: JobService, 
              private router: Router) {
    jobService.getJobs().subscribe(data => {
      console.log(data)
      this.jobs = data;
    });
  }

  toggle() {
    this.isActive = !this.isActive;
  }

    onEditClick(id) {
    this.isEdit = true;
    this.id = id;
    console.log(id);
  }

  onSubmit(isEdit) {
    const job = {
      title: this.title,
      type: this.type,
      salary: this.salary,
      author: this.author,
      details: this.details
    }
    if(isEdit) {
      console.log(this.id)
      this.jobService.updateJob(this.id, job).subscribe(data => {
        this.router.navigate(['/dashboard'])
      })
    } else {
      this.jobService.addJob(job).subscribe(data => {
        console.log(localStorage.getItem('id_token'));
        console.log(data);
        if(data.success) {
          this.router.navigate(['/dashboard']);
        }
      })
    }
  }

    onDeleteClick(id){
        this.jobService.deleteJob(id).subscribe(data => {
          console.log(localStorage.getItem('id_token'));
          console.log("delete: "+data);
          for(let i =0; i < this.jobs.length; i++) {
            if(this.jobs[i]._id == id) {
              this.jobs.splice(i,1);
            }
          }
        })
    }

<<<<<<< HEAD
}
=======
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
>>>>>>> 7dc86d6bc17cdf6f6583b5ed9db334c5c1b47179
