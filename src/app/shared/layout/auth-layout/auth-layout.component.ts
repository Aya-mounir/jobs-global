import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  standalone:true,
  imports:[
    RouterModule,
    DialogModule,
    ReactiveFormsModule,
    ToastModule,
    NavBarComponent
  ],
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent {
  // initializations
  navItems: any = [
    { title: 'login', active: false },
    { title: 'register', active: false },
  ];
}
