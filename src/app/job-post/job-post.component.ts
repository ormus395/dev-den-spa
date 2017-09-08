import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {

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

    this.jobService.addJob(job).subscribe(data => {
      console.log(localStorage.getItem('id_token'));
      console.log(data);
      if(data.success) {
        this.router.navigate(['/job-admin']);
      }
    });
    
  }

}
