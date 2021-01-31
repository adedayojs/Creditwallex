import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRestService } from '../../services/baserest.service';

@Injectable({
  providedIn: 'root',
})
export class StarshipService extends BaseRestService {
  constructor(private http: HttpClient) {
    super();
  }
  url = `${this.baseUrl}starships`;
  fetchShips() {
    return this.http.get<any>(this.url);
  }
}
