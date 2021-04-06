import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'asdsa';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl);
  }
}
