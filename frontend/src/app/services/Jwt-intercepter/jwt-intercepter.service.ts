import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class JwtIntercepterService {

  private requests: HttpRequest<any>[] = [];

  constructor(private router: Router, private toastr: ToastrService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requests.push(req);

    const currentToken = sessionStorage.getItem('Token') || '';
    if (currentToken) {
      req = req.clone({
        setHeaders: {
          'Authorization': currentToken
        }
      });
    }

    return next.handle(req).pipe(
      retry(0),
      catchError((errorResponse: HttpErrorResponse) => {
        let errorMsg = '';

        if (errorResponse.error instanceof ErrorEvent) {
          // client-side error
          errorMsg = errorResponse.error.message;
        } else {
          // server-side error
          if (errorResponse.status === 400) {
            // Bad request
            errorMsg = 'Bad Request';
          } else if (errorResponse.status === 401) {
            // unauthorized
            sessionStorage.clear();
            this.router.navigate(['/login']);
            errorMsg = 'Your session has been expired. Please Login again to start your new session';
          }
        }

        if (errorMsg) {
          this.toastr.error(errorMsg, 'Error');
        }
        return throwError(errorResponse);
      }),
      finalize(() => this.removeRequest(req))
    );
  }


  removeRequest(req: HttpRequest<any>) {
    const found = this.requests.find((f) => f.url === req.url);
    if (found) {
      const i = this.requests.indexOf(found);
      if (i >= 0) {
        this.requests.splice(i, 1);
      }
    }
    const obj = { show: this.requests.length > 0, value: this.requests.length };
  }
}
