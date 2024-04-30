import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://reqres.in/api';

  getUsers(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users?page=${page}`);
  }

  getUserDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }
}
