import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http"
import { Observable, catchError, delay, retry, throwError } from "rxjs";
import { Iproduct } from "../models/product";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
})

export class ProductService{
    constructor(private http: HttpClient, private errorService: ErrorService){

    }

    getAll():Observable<Iproduct[]> {
        return this.http.get<Iproduct[]>('https://fakestoreapi.com/products',{
            params: new HttpParams({
                fromObject:{
                    'limit':7
                }
            })
        }).pipe(
            delay(2000),
            retry(2),
            catchError(this.errorHandler.bind(this))
        )
    }

    private errorHandler(error:HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError(()=> error.message)
    }
}