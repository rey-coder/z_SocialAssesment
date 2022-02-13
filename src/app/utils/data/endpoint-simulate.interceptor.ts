import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class EndpointSimulateInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const { url, method, headers, body } = request;

  }
}

export const EndpointSimulateProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: EndpointSimulateInterceptor,
  multi: true
};