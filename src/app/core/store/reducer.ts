// job.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Job } from './job.model';
import { loadJob, resetJob } from './actions';

export interface JobState {
  job: Job;
}

export const initialState: JobState = {
  job: { id: -1, email: '', first_name: '', last_name: '', avatar: '' },
};

export const JobReducer = createReducer(
  initialState,
  on(loadJob, (state, { job }) => ({ ...state, job })),
  on(resetJob, (state) => ({ ...state, job:  { id: -1, email: '', first_name: '', last_name: '', avatar: '' } }))
);
