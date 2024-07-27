// job.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Job } from './job.model';
import { loadJob, resetJob } from './actions';

export interface JobState {
  job: Job;
}

export const initialState: JobState = {
  job: {  id: '', company_email: '', title: '', description: '', salary: 0,skills:'',priority:'' },
};

export const JobReducer = createReducer(
  initialState,
  on(loadJob, (state, { job }) => ({ ...state, job })),
  on(resetJob, (state) => ({ ...state, job:  { id: '', company_email: '', title: '', description: '', salary: 0,skills:'',priority:'' } }))
);
