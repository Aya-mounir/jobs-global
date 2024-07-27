// job.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { JobState } from './reducer';

export const selectJobState = createFeatureSelector<JobState>('Job');

export const selectJob = createSelector(selectJobState, (state: JobState) => state.job);
