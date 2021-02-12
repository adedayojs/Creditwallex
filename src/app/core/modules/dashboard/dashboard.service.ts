import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseRestService } from '../../services/baserest.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService extends BaseRestService {
  constructor(private http: HttpClient) {
    super();
  }
  url = `${this.baseUrl}films`;
  fetchFilms() {
    return this.http.get<any>(this.url, {
      headers: this.headers,
      // withCredentials: environment.production,
      observe: 'response',
      responseType: 'json',
    });
  }
}
