import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';

@Injectable()
export class BaseRestService {
  baseUrl: string = environment.apiBaseUrl;
  // testUrl: string = environment.apiTestUrl;
  token: string;
  headers: HttpHeaders;
  userId: string;

  constructor() {
    this.setHttpRequestParams();
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        'response code: ' +
          error.status +
          ' response body: ' +
          JSON.stringify(error.error)
      );
    }

    return throwError(error);
  }

  setHttpRequestHeaders(headers?: { [name: string]: string | string[] }) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Auth-Token': this.token,
      'Show-Error-Toast': 'false',
      ...headers,
    });
  }

  addHeaders(newHeaders: {
    [name: string]: string | string[];
  }): { [name: string]: string | string[] } {
    let headers = {};
    this.headers.keys().forEach((val) => {
      headers = {
        ...headers,
        [val]: this.headers.get(val),
      };
    });
    return (headers = {
      ...headers,
      ...newHeaders,
    });
  }

  setHttpRequestParams() {
    this.userId = localStorage.getItem('userId');
    this.token = localStorage.getItem('token');
  }

  resetInitialParams(headers?: { [name: string]: string | string[] }) {
    this.setHttpRequestParams();
    if (headers) {
      this.setHttpRequestHeaders(headers);
    } else {
      this.setHttpRequestHeaders();
    }
  }
}
