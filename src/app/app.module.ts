import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { RouterModule }      from '@angular/router';

import { AppComponent }      from './app.component';
import { CoreModule }        from './core/core.module';

import { GlobalInterceptor } from './core/interceptor/global.interceptor';

import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [    {
    provide : HTTP_INTERCEPTORS,
    useClass: GlobalInterceptor,
    multi   : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
