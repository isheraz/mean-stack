import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs():Observable<any> {
    return this.http.get<any>(`${environment.backendRoute}/blog/get`);
  }

  createBlog(body: any): Observable<any> { 
    return this.http.post(`${environment.backendRoute}/blog/create`, body);
  }

  getBlogById(id: any): Observable<any>{
    return this.http.get<any>(`${environment.backendRoute}/blog/${id}`);
  }

  update(id: any, body: any): Observable<any> {
    return this.http.put(`${environment.backendRoute}/blog/update/${id}`, body);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${environment.backendRoute}/blog/delete/${id}`);
  }
}
