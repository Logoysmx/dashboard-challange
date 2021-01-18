import { Routes }                     from '@angular/router';
import { LoginComponent }             from './pages/login/login.component';

import { TokenRequiredGuard }         from './guards/token-required.guard';

export const CORE_ROUTER: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path        : 'dashboard',
    canActivate : [ TokenRequiredGuard ],
    loadChildren: () => import('../features/dashboard/deashboard.module').then( m => m.DashboardModule )
  },  
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
