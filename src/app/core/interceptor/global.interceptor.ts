import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable }                                                        from '@angular/core';
import { Observable }                                                        from 'rxjs';
import { AuthModel }                                                         from '../models/auth.mode';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept( request: HttpRequest<unknown>, next: HttpHandler ): Observable<HttpEvent<unknown>> {
    if ( request.url.includes( '/login' ) ) {
      return next.handle( request );
    } else {
      const token = AuthModel.loadCache()?.accessToken;
      return next.handle(
        request.clone( {
          headers: new HttpHeaders().set( 'Authorization', `Bearer ${ token }` )
        } )
      );
    }
  }
}
