import { CommonModule }              from '@angular/common';
import { HttpClientModule }          from '@angular/common/http';
import { NgModule }                  from '@angular/core';
import { ReactiveFormsModule }       from '@angular/forms';
import { RouterModule }              from '@angular/router';
import { DashboardComponent }        from './dashboard.component';
import { DASHBOARD_ROUTER }          from './dashboard.router';

@NgModule( {
  declarations: [
    DashboardComponent
  ],
  imports     : [
    CommonModule,
    RouterModule.forChild( DASHBOARD_ROUTER ),
    ReactiveFormsModule,
    HttpClientModule
  ]
} )
export class DashboardModule {}
