import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  submitLogin(input:object):Observable<any>{
    return this.http.post<any>(environment.backendRoute + '/login' , input);
  }
}
