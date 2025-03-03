import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IHttpResponse } from '../../interfaces/http-response.interface';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public http: HttpClient;
  private readonly baseUrl: any;

  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
    this.baseUrl = environment.baseUrl;
  }

  public get<T>(
    url: string,
    data?: any,
    responseType?: any
  ): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${url}`, data);
  }

  public post<T>(
    url: string,
    data?: any,
    responseType?: any,
    body?: any
  ): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, data);
  }

  public put<T>(url: string, data?: any): Observable<T> {
    return this.http
      .put<IHttpResponse<T>>(`${this.baseUrl}/${url}`,data)
      .pipe(map((res) => res.content));
  }
  public delete<T>(url: string, data?: any): Observable<T> {
    return this.http
      .delete<IHttpResponse<T>>(
        `${this.baseUrl}/${url}`
      )
      .pipe(map((res) => res.content));
  }

  public toQueryString(obj: object): string {
    return Object.keys(obj)
      .filter((key) => obj[key as keyof typeof obj] != undefined)
      .map((key) => key + '=' + obj[key as keyof typeof obj])
      .join('&');
  }
}
