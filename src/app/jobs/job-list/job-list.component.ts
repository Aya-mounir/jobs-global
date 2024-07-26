import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../core/services/features/jobs.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './job-list.component.html',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule],
  providers: [JobsService],
})
export class JobListComponent {
  jobs!: any[];

  constructor(private _JobsService: JobsService) {}

  ngOnInit() {
    this._JobsService
      .getAllJobs('9')
      .subscribe(
        (res:any)=>{
          this.jobs = res.data;
          console.log(res);

        }
      );
  }

}
