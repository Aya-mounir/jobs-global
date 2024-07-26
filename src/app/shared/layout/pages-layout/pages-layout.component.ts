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

  selector: 'app-pages-layout',
  templateUrl: './pages-layout.component.html',
  styleUrls: ['./pages-layout.component.scss']
})
export class PagesLayoutComponent {
  // initializations
  navItems: any = [
    { title: 'list', active: false },
  ];

}
