import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    ToastModule,
    RouterLink
  ],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],
})
export class RegisterComponent {
  // =========================== Initialization ========================
  registerForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _Router: Router,
    private _MessageService: MessageService
  ) {
    // remove token from local storage
    localStorage.removeItem('token');

    // create reactive form
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  // ================ Functions ===================

  // submit function to register
  onSubmit() {
    this.loading = true;
    // check if inputs is valid and not empty
    if (
      this.registerForm.value.email != '' &&
      this.registerForm.value.password != ''
    ) {
      // body of request
      const body = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      };

      // set data
      localStorage.setItem('email', body.email);
      localStorage.setItem('password', body.password);
      localStorage.setItem('token', body.password + body.email);
      this._MessageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `You can login Now!`,
      });

      this.loading = false;

    } else {
      this.loading = false;
      // check if password field is empty
      if (this.registerForm.value.password == '') {
        this._MessageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `Password is Missing!`,
        });
      }
      // check if email is empty
      if (this.registerForm.value.email == '') {
        this._MessageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `Email is Missing!`,
        });
      }
    }
  }
}
