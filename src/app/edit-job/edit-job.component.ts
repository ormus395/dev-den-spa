import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JobService } from '../services/job.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  id: any;
  title: string;
  type: string;
  salary: string;
  author: string;
  details: string;

  constructor(private jobService: JobService, 
              private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit() {
    const job = {
      title: this.title,
      type: this.type,
      salary: this.salary,
      author: this.author,
      details: this.details
    }

    console.log(this.id)
    this.jobService.updateJob(this.id, job).subscribe(data => {
      this.router.navigate(['/job-admin'])
    });
  }
}
