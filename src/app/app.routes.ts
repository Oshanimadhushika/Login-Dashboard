// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from '../guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];
