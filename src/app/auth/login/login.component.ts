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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent {
  // =========================== Initialization ========================
  loginForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _Router: Router,
    private _MessageService: MessageService
  ) {
    // remove token from local storage
    localStorage.removeItem('token');

    // create reactive form
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  // ================ Functions ===================

  // submit function to login
  onSubmit() {
    this.loading = true;
    // check if inputs is valid and not empty
    if (
      this.loginForm.value.email != '' &&
      this.loginForm.value.password != ''
    ) {
      // body of request
      const body = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      if (localStorage.getItem('email') && localStorage.getItem('password')) {
        // make a request
        if (
          localStorage.getItem('email') != body.email ||
          localStorage.getItem('password') != body.password
        ) {
          this._MessageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `Not a valid mail or password!`,
          });
        } else {
          this.loading = false;
          localStorage.setItem('token', body.password + body.email);
          this._Router.navigate(['jobs']);
        }
      } else {
        this.loading = false;
        this._MessageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `Something went wrong!`,
        });
      }
    } else {
      this.loading = false;
      // check if password field is empty
      if (this.loginForm.value.password == '') {
        this._MessageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `Password is Missing!`,
        });
      }
      // check if email is empty
      if (this.loginForm.value.email == '') {
        this._MessageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `Email is Missing!`,
        });
      }
    }
  }
}
