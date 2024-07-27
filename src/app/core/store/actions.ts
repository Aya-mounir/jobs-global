// Job.actions.ts
import { createAction, props } from '@ngrx/store';
import { Job } from './job.model';

export const loadJob = createAction('[Job] Load Job', props<{ job: Job }>());
export const resetJob = createAction('[Job] Reset Job');
