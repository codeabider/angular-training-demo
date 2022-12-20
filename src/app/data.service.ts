import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError, retry } from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(url: string): Observable<any> {
    return this.http
      .get(`${BASE_URL}/${url}`, {
        headers: {
            'My-Custom-Header': 'Custom Header Value'
        }
      })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  handleError(): Observable<object> {
    return throwError(() => new Error('Something went wrong!'));
  }
}
