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

  getClientsBySurname(data:{custSurname:string}):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+'/getClientsBySurname', data);
  }

  addCheck(data:any):Observable<any>{
    return this.http.post<any>(this.apiServerUrl+'/createCheck', data);
  }

  getAllChecksMadeInPeriod(data:any):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+'/getAllChecksMadeInPeriod', data);
  }

  getAllChecksMadeToday():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getAllChecksMadeToday');
  }
  getCheckInfoByCheckNumber(data:any):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+'/getCheckInfoByCheckNumber', data);
  }

  getSelfInfo(data:any):Observable<any>{
    return this.http.post<any[]>(this.apiServerUrl+'/getSelfInfo', data);
  }
}
