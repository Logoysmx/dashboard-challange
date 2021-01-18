import { environment } from '../../../environments/environment';

export class UrlApiUtility {
  public static getApiUrl(): string {
    return environment.apiUrl;
  }
}
