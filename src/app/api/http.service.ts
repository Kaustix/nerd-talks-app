import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(
    private http: HttpClient,
  ) {
  }

  private formatErrors(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(`Api returned code ${error.status}, body was: ${error.error}`);
    }

    return throwError('Something bad happened: please try again.');
  }

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get<T>(`${environment.apiUrl}${path}`, {params})
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any = {}): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: any = {}): Observable<any> {
    return this.http
      .put(`${environment.apiUrl}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http
      .delete(`${environment.apiUrl}${path}`)
      .pipe(catchError(this.formatErrors));
  }
}
