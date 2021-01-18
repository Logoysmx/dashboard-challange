import { Routes }                 from '@angular/router';
import { DashboardComponent }     from './dashboard.component';

export const DASHBOARD_ROUTER: Routes = [
  {
    path     : '',
    component: DashboardComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
