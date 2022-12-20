import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  isLoading = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http
      .get('users')
      .pipe(catchError(this.handleError));
  }

  getAddresses(): Observable<any> {
    return this.http.get('addresses');
  }

  handleError(): Observable<object> {
    return throwError(() => new Error('Something went wrong!'));
  }

  showLoader(): void {
    console.log('SHOW LOADER');
    this.isLoading.next(true);
  }

  hideLoader(): void {
    console.log('HIDE LOADER');
    this.isLoading.next(false);
  }
}
