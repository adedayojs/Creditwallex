import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface UserData {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  resturl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}
  login(data: UserData) {
    return this.http.post(`${this.resturl}/user`, data);
  }
  signup(data: UserData) {
    return this.http.post(`${this.resturl}/user`, data);
  }
}
