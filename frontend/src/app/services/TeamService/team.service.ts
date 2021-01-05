import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {
  }

  getTeam(): Observable<any> {
    const path = 'get';
    return this.http.get(`${environment.backendRoute}/team/${path}`);
  }

  createTeam(body: object): Observable<any> {
    const path = 'create';
    return this.http.post(`${environment.backendRoute}/team/${path}`, body);
  }

  deleteTeam(id: object): Observable<any> {
    const path = 'delete';
    return this.http.delete(`${environment.backendRoute}/team/${path}/${id}`);
  }

  update(id: string, body: object): Observable<any> {
    const path = 'update';
    return this.http.put(`${environment.backendRoute}/team/${path}/${id}`, body);
  }
}
