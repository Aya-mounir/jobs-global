import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    ToastModule,
    NgIf,
    DropdownModule,
    FileUploadModule
  ],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.scss',
  providers: [MessageService],
})



export class JobApplicationComponent {
  @Output() close = new EventEmitter<boolean>();
  applied: boolean = false;
  applicationForm!: FormGroup;
  countries: any[] | undefined;
  selectedCountry: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private _Router: Router,
    private _MessageService: MessageService
  ) {

    // create reactive form
    this.applicationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      country: ['', [Validators.required]],
      education: ['', [Validators.required]],
      position: ['', [Validators.required]],
      company: ['', [Validators.required]],
      coverLetter: ['', [Validators.required]],
    });

    this.countries = [
      { name: 'Saudi Arabia', code: 'SA' },
      { name: 'United Emirates', code: 'UE' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' }
  ];
  }

  // emit to close
  closeDialog() {
    this.close.emit(true);
  }
  // Apply
  apply() {
    if(
      this.applicationForm.value.name != '' &&
      this.applicationForm.value.email != '' &&
      this.applicationForm.value.phone != '' &&
      this.applicationForm.value.country!='' &&
      this.applicationForm.value.education != '' &&
      this.applicationForm.value.position != '' &&
      this.applicationForm.value.company != '' &&
      this.applicationForm.value.coverLetter != ''
    ){
      this.applied = true;
      this._MessageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `Application Sent!`,
      });

    }
    else{
      this._MessageService.add({
        severity: 'error',
        summary: 'Error',
        detail: `please try again!`,
      });

    }
  }

  onUpload(event: any) {
    this._MessageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded ' });
}
}
