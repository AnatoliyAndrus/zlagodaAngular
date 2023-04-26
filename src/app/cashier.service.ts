import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CashierService {

  private apiServerUrl = 'http://localhost:8080/cashier';
  constructor(private http: HttpClient) { }


  getProductsByName(data:{productName:string}):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+"/getProductsByName", data);
  }

  getStoreProductsSortedByName():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+"/getStoreProductsSortedByName");
  }
}