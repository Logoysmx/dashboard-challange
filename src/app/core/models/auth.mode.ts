export class AuthModel {
    private readonly _accessToken: string;
    private readonly _tokenType: string;
    private readonly _expiresIn: number;
    private readonly _scope: string;
  
    constructor( accessToken: string, tokenType: string, expiresIn: number, scope: string ) {
      this._accessToken = accessToken;
      this._tokenType   = tokenType;
      this._expiresIn   = expiresIn;
      this._scope       = scope;
    }
  
    public get accessToken(): string {
      return this._accessToken;
    }
  
    public get tokenType(): string {
      return this._tokenType;
    }
  
    public get expiresIn(): number {
      return this._expiresIn;
    }
  
    public get scope(): string {
      return this._scope;
    }
  
    public static loadCache(): AuthModel {
      const json: any = JSON.parse( localStorage.getItem( 'auth' ) ) || null;
      if ( json ) {
        return new AuthModel(
          json.accessToken,
          json.tokenType,
          json.expiresIn,
          json.scope
        );
      } else {
        return null;
      }
    }
  
    public saveCache(): void {
      console.log('Saving....');
      localStorage.setItem( 'auth', JSON.stringify( {
        accessToken: this.accessToken,
        tokenType  : this.tokenType,
        expiresIn  : this.expiresIn,
        scope      : this.scope
      } ) );
    }
  }
  