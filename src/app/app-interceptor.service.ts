import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable, retry } from "rxjs";
import { DataService } from "./data.service";

const BASE_URL = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class AppInterceptorService implements HttpInterceptor {
    constructor(private dataService: DataService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // universal loader
        this.dataService.showLoader();

        const newReq = req.clone({
            // setting base url for all requests
            url: `${BASE_URL}/${req.url}`,
            // adding custom headers/ modifying headers
            setHeaders: {
                'My-Custom-Header': 'Custom Header Value',
            }
        });

        return next.handle(newReq).pipe(
            // retry all request twice after failure
            retry(2),
            finalize(() => this.dataService.hideLoader())
        )
    }
}