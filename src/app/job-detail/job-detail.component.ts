import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { FieldDefinition } from '../../fw/dynamic-forms/field-definition';
import { JobService } from '../services/job.service';
import { Job } from '../view-models/job';

@Component({
  selector: "app-job-detail",
  templateUrl: "./job-detail.component.html",
  styleUrls: ["./job-detail.component.css"]
})
export class JobDetailComponent implements OnInit {
  job: Job;
  jobDefinition: Array<FieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    {
      key: 'title',
      type: 'string',
      isId: false,
      label: 'Title',
      required: true
    },
    {
      key: 'type',
      type: 'string',
      isId: false,
      label: 'Type',
      required: true
    },
    {
      key: 'salary',
      type: 'string',
      isId: false,
      label: 'Salary',
      required: true
    },
    {
      key: 'employer',
      type: 'string',
      isId: false,
      label: 'Employer',
      required: true
    },
    {
      key: 'details',
      type: 'string',
      isId: false,
      label: "Details",
      required: true
    }
  ];
  errorMessage: string;
  operation: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService
  ) {}

  createJob(job: Job) {
    job.id = 0;
    this.errorMessage = null;
    this.jobService
      .addJob(job)
      .subscribe(
        c => this.router.navigate(["/job-admin"]),
        err => (this.errorMessage = "Error adding Job...")
      );
  }

  ngOnInit() {
    this.operation = this.route.snapshot.params["operation"];

    if (this.operation === "create") {
      this.job = {
        id: 0,
        title: "",
        type: "",
        salary: "",
        employer: "",
        details: ""
      };
    } else {
      this.jobService
        .getJob(this.route.snapshot.params["id"])
        .subscribe((job: Job) => (this.job = job));
    }
  }

  updateJob(job: Job) {
    // this.errorMessage = null;
    // this.jobService
    //   .updateJob(job)
    //   .subscribe(
    //     c => this.router.navigate(["/job-admin"]),
    //     err => (this.errorMessage = "Error updating Job...")
    //   );
  }

  applyToJob(job: Job) {}
}
