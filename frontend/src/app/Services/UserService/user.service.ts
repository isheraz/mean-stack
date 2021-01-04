import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  userList(): Observable<any> {
    const path = 'users';
    return this.http.get(`${environment.backendRoute}/users`);
  }
}
