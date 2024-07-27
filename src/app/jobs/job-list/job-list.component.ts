import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../core/services/features/jobs.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SeeMoreLessDirective } from '../../core/directives/see-more-less.directive';
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
    SeeMoreLessDirective
  ],
  providers: [JobsService],
})
export class JobListComponent {
  jobs!: any[];

  constructor(private _JobsService: JobsService) {}

  ngOnInit() {
    this._JobsService.getAllJobs('11').subscribe((res: any) => {
      this.jobs = res.data;
      console.log(res.data);

    });
  }

  search(event:any){

    if(event.target.value=='')
    {
      this._JobsService.getAllJobs('11').subscribe((res: any) => {
        this.jobs = res.data;
      });
    }
    else{
      console.log('s');
      let jobsData:any = [];
      this.jobs=[]
      this._JobsService.getAllJobs('11').subscribe((res: any) => {
        jobsData = res.data;
        jobsData.forEach((element:any) => {
          if (element.title.toLowerCase().includes(event.target.value.toLowerCase()))
          {
            console.log(element.title);
            this.jobs.push(element)
          }
        });

      });
    }

  }
}
