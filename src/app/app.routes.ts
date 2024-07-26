import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { PagesLayoutComponent } from './shared/layout/pages-layout/pages-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    component:AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth/auth.routes').then((m) => m.AuthRoutes),
      },
    ],
  },
  {
    path: 'jobs',
    component:PagesLayoutComponent,
    canActivate:[authGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./jobs/jobs.routes').then((m) => m.JobsRoutes),
      },
    ],
  },
  {path: '**', redirectTo: 'auth'},
];
