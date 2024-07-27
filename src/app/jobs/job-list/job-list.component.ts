import { Component, Input } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../core/services/features/jobs.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SeeMoreLessDirective } from '../../core/directives/see-more-less.directive';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { loadJob } from '../../core/store/actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-jobs-list',
  templateUrl: './job-list.component.html',
  standalone: true,
  imports: [
    DataViewModule,
    ButtonModule,
    TagModule,
    CommonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    SeeMoreLessDirective,
    DialogComponent,
  ],
  providers: [JobsService],
})
export class JobListComponent {
  jobs!: any[];
  showDetails: boolean = false;

  constructor(private _JobsService: JobsService, private _Store: Store) {}

  ngOnInit() {
    this._JobsService.getAllJobs('11').subscribe((res: any) => {
      this.jobs = res.data;
      console.log(res.data);
    });
  }

  // get job details
  setjobDetails(job: any) {
    this.showDetails = true;

    const newJob = {
      id: job.id || 'NULL',
      company_email: job.page.work_space_meta_data.company_email || 'no email',
      title: job.title || 'no title',
      description: job.description || 'no description',
      salary: job.salary_to || 0,
      skills: job.skills || 'no Skills',
      priority: job.priority || 'no priority',
    };
    this._Store.dispatch(loadJob({ job: newJob })); //change job info from store with new user
  }

  // Search
  search(event: any) {
    // if input empty get all jobs
    if (event.target.value == '') {
      this._JobsService.getAllJobs('11').subscribe((res: any) => {
        this.jobs = res.data;
      });
    } else {
      //after typin get data and push them in jobs array
      let jobsData: any = [];
      this.jobs = [];
      this._JobsService.getAllJobs('11').subscribe((res: any) => {
        jobsData = res.data;
        jobsData.forEach((element: any) => {
          if (
            element.title
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          ) {
            this.jobs.push(element);
          }
        });
      });
    }
  }
  close() {
    this.showDetails = false;
  }
}
