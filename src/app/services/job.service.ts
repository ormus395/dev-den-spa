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

  //TODO Refactor
  getJob(id) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Authorization', localStorage.getItem('id_token'));    
    return this.http
      .get("http://localhost:3000/jobs/" + id, {
        headers: headers
      })
      .map(res => res.json());
  }

  addJob(job) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Authorization', localStorage.getItem('id_token'));
    return this.http
      .post("http://localhost:3000/jobs", job, {
        headers: headers
      })
      .map(res => res.json());
  }

  deleteJob(id) {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('id_token'));
    return this.http.delete('http://localhost:3000/jobs/' + id, {headers: headers})
      .map(res => res.json());
  }


  updateJob(id, job) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Authorization', localStorage.getItem('id_token'));    
    return this.http
      .patch("http://localhost:3000/jobs/" + id, job, {
        headers: headers
      })
      .map(res => res.json());
  }

}