import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "./Models/Category";
import {Observable} from "rxjs";
import {Employee} from "./Models/Employee";
import {CustomerCard} from "./Models/CustomerCard";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private apiServerUrl = 'http://localhost:8080/manager';
  constructor(private http: HttpClient) { }

  addCategory(category: Category):Observable<Category>{
    return this.http.post<Category>(this.apiServerUrl+'/createCategory', category);
  }

  addProduct(product: any):Observable<any>{
    return this.http.post<any>(this.apiServerUrl+'/createProduct', product);
  }

  addStoreProduct(storeProduct:any):Observable<any>{
    return this.http.post<any>(this.apiServerUrl+'/createStoreProduct', storeProduct);
  }

  addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.apiServerUrl+'/createEmployee', employee);
  }

  addCustomerCard(customerCard:CustomerCard):Observable<CustomerCard>{
    return this.http.post<CustomerCard>(this.apiServerUrl+'/createCustomerCard', customerCard);
  }

  updateCategory(category:any):Observable<any>{
    return this.http.patch<any>(this.apiServerUrl+'/updateCategory', category);
  }

  updateProduct(product:any):Observable<any>{
    return this.http.patch<any>(this.apiServerUrl+'/updateProduct', product);
  }

  updateStoreProduct(storeProduct:any):Observable<any>{
    return this.http.patch<any>(this.apiServerUrl+'/updateStoreProduct', storeProduct);
  }

  updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.patch<Employee>(this.apiServerUrl+'/updateEmployee', employee);
  }

  deleteCategory(category:any):Observable<any>{
    return this.http.delete(this.apiServerUrl+'/deleteCategory', category);
  }

  deleteProduct(product:any):Observable<any>{
    return this.http.delete(this.apiServerUrl+'/deleteProduct', product);
  }

  deleteStoreProduct(storeProduct:any):Observable<any>{
    return this.http.delete(this.apiServerUrl+'/deleteStoreProduct', storeProduct);
  }

  deleteEmployee(employee:any):Observable<any>{
    return this.http.delete(this.apiServerUrl+'/deleteEmployee', employee);
  }

  deleteCustomerCard(customerCard:any):Observable<any>{
    return this.http.delete(this.apiServerUrl+'/deleteCustomerCard', customerCard);
  }

  deleteCheck(check:any):Observable<any>{
    return this.http.delete(this.apiServerUrl+"deleteCheck", check);
  }


}
