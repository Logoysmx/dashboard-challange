// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }              from 'rxjs';
import { map, take }               from 'rxjs/operators';
import { UrlApiUtility }           from '../utilities/url-api';
import { AuthModel }               from '../models/auth.mode';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public login( username: string, password: string ): Observable<any> {
    const urlencoded = new URLSearchParams();
    urlencoded.append( 'grant_type', 'password' );
    urlencoded.append( 'email', username );
    urlencoded.append( 'password', password );

    return this.http.request( 'POST', `${ UrlApiUtility.getApiUrl() }/login`, {
      body   : urlencoded.toString(),
      headers: new HttpHeaders()
        .set( 'Content-Type', 'application/x-www-form-urlencoded' )
        .set( 'Authorization', `Basic ${ btoa( `ClientId:secret` ) }` )
        .set( 'email', username )
        .set( 'password', password )
    } ).pipe(
      map( ( resp: any ) => {
        const auth = new AuthModel( resp[ 'token' ], resp[ 'token_type' ], resp[ 'expires_in' ], resp[ 'scope' ] );
        auth.saveCache();
        return auth;
      } )
    );
  }

}
