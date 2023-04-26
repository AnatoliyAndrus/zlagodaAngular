import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "./Models/Category";
import {Observable} from "rxjs";
import {CustomerCard} from "./Models/CustomerCard";

@Injectable({
  providedIn: 'root'
})
export class MutualService {

  private apiServerUrl = 'http://localhost:8080/general';
  constructor(private http: HttpClient) { }

  addCustomerCard(customerCard: CustomerCard):Observable<CustomerCard>{
    return this.http.post<CustomerCard>(this.apiServerUrl+'/createCustomerCard', customerCard);
  }

  updateCustomerCard(customerCard: CustomerCard):Observable<CustomerCard>{
    return this.http.patch<CustomerCard>(this.apiServerUrl+'/updateCustomerCard', customerCard);
  }

  getCategoryList():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getCategoryList');
  }
  getProductList():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getProductList');
  }
  getEmployeeList():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getEmployeeList');
  }
  getCustomerCardList():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getCustomerCardList');
  }
  getCheckList():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getCheckList');
  }
  getProductsSortedByName():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getProductsSortedByName');
  }
  getCustomersSortedBySurname():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getCustomersSortedBySurname');
  }
  getProductsWithCategoryNameSortedByName(data:{categoryName:string}):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+'/getProductsWithCategoryNameSortedByName', data);
  }
  getStoreProductInfoByUPC(data:{UPC:string}):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+'/getStoreProductInfoByUPC', data);
  }
  getPromotionalProductsSorted(data:{sortBy:string}):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+'/getPromotionalProductsSorted', data);
  }
  getNonPromotionalProductsSorted(data:{sortBy:string}):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+'/getNonPromotionalProductsSorted', data);
  }

  getStoreProductList():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getStoreProductList');
  }
  getStoreProductListPresent():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getStoreProductListPresent');
  }



}
