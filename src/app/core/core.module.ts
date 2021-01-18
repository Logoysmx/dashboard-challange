import { CommonModule }        from '@angular/common';
import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { CORE_ROUTER }         from './core.router';

import { LoginComponent } from './/pages/login/login.component';

@NgModule( {
  declarations: [
    LoginComponent,
  ],
  imports     : [
    CommonModule,
    RouterModule.forRoot( CORE_ROUTER, { relativeLinkResolution: 'legacy', useHash: true } ),
    ReactiveFormsModule
  ]
} )
export class CoreModule {}
