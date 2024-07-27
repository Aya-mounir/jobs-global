import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss',
})
export class JobDetailComponent {
  job: any;
  @Output() apply = new EventEmitter<boolean>();
  @Output() close = new EventEmitter<boolean>();

  constructor(private store: Store) {
    this.store.subscribe((res: any) => {
      console.log(res.job.job);
      this.job = res.job.job;
    });
  }

  // emit to Apply Job
  applyJob() {
    this.apply.emit(true);
  }

  // emit to close
  closeDialog() {
    this.close.emit(true);
  }
}
