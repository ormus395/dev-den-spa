import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from './user.service';
import { Job } from '../view-models/job';
// import { Developer } from '../view-models/developer';
// import { Challenge } from '../view-models/challenge';

@Injectable()
export class AppDataService {

    private jobs : Array<Job> = [
        { id: 1, title: "Android Developer", type:"Full Time", salary: "$75k Annually", employer: "Apex Systems"},
        { id: 2, title: "Front End Developer", type:"Full Time", salary: "$55k Annually", employer: "American Express"},
        { id: 3, title: "Angular Developer", type:"Full Time", salary: "$85k Annually", employer: "Code Pros"},
        { id: 4, title: "Full Stack JavaScript Developer", type:"Full Time", salary: "$100k Annually", employer: "Wells Fargo"},
    ];

    // private developers : Array<Developer> = [
    //     { id: 1, name: "Shane Polwort", email: "spolwort1970@gmail.com"},
    //     { id: 2, name: "Jarec Turner", email: "ormus395@gmail.com"},
    //     { id: 3, name: "Nick Vela", email: "nvela@gmail.com"},
    //     { id: 4, name: "Steven Bowen", email: "sbowen@yahoo.com"},
    //     { id: 5, name: "Wendy Grapentine", email: "grapejuice@yahoo.com"},
    // ];

    constructor(private userService: UserService) {

    }

    createJob(vm: Job): Observable<any> {
        //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Unable to create Job'));
        let id = 0;
        this.jobs.forEach(c => {if (c.id >= id) id = c.id+1 });
        vm.id = id;
        this.jobs.push(vm);
        return Observable.of(vm);
    }

    deleteJob(id: number) : Observable<any> {
        return Observable.of({}).delay(2000)
        .do(e => this.jobs.splice(this.jobs.findIndex(c => c.id == id), 1));
    }

    getJobs() : Observable<any> {
        return Observable.of(this.jobs);
    }

    getJob(id: number) : Observable<Job> {
        var job = this.jobs.find(c => c.id == id);
        return Observable.of(job);
    }

    updateJob(updatedJob: Job) : Observable<any> {
        var job = this.jobs.find(c => c.id == updatedJob.id);
        Object.assign(job, updatedJob);
        return Observable.of(job).delay(2000);
        //return Observable.of({}).delay(2000).flatMap(x => Observable.throw(''));   
    }
}
