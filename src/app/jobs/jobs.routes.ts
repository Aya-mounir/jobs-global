import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { JobApplicationComponent } from './job-application/job-application.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

export const JobsRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: JobListComponent },
  { path: 'application', component: JobApplicationComponent },
  { path: 'details', component: JobDetailComponent },
];
