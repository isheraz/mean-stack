import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  createComment(body: any):Observable<any>{
    return this.http.post(`${environment.backendRoute}/comment/create`, body);
  }

  deleteComment(id: any):Observable<any>{
    return this.http.delete(`${environment.backendRoute}/comment/delete/${id}`);
  } 
}
