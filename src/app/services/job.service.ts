import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { tokenNotExpired } from "angular2-jwt";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Job } from "../view-models/job";


@Injectable()
export class JobService {
  job: any;

  constructor(private http: Http) {}

  getJobs() {
    return this.http.get("http://localhost:3000/jobs").map(res => res.json());
  }

  getJob(id: number): Observable<Job> {
    var job = this.job.find(c => c.id == id);
    return Observable.of(job);
  }

  addJob(job) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/jobs", job, {
        headers: headers
      })
      .map(res => res.json());
  }

  deleteJob(job) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/jobs", job, {
        headers: headers
      })
      .map(res => res.json());
  }

  updateJob(job) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/jobs", job, {
        headers: headers
      })
      .map(res => res.json());
  }
}
