import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Store } from '@ngrx/store';
import { JobDetailComponent } from '../../../jobs/job-detail/job-detail.component';
import { JobApplicationComponent } from '../../../jobs/job-application/job-application.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    JobDetailComponent,
    JobApplicationComponent,
    NgIf,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  @Input() details: boolean = true;
  @Input() visible: boolean = false;
  @Output() closeDialog = new EventEmitter<boolean>();

  showDialog() {
    this.visible = true;
  }

  // when click apply change data in dialog
  checkApply() {
    this.details = false;
  }

  // emit to close dialog from all components
  close() {
    this.details = true;
    this.visible = false;
    this.closeDialog.emit(false);
  }
}
