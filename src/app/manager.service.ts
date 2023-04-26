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
    return this.http.post<any>(this.apiServerUrl+'/createCategory', category);
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
    return this.http.put(this.apiServerUrl+'/deleteCategory', category);
  }

  deleteProduct(product:any):Observable<any>{
    return this.http.put(this.apiServerUrl+'/deleteProduct', product);
  }

  deleteStoreProduct(storeProduct:any):Observable<any>{
    return this.http.put(this.apiServerUrl+'/deleteStoreProduct', storeProduct);
  }

  deleteEmployee(employee:any):Observable<any>{
    console.log(employee);
    return this.http.put(this.apiServerUrl+'/deleteEmployee', employee);
  }

  deleteCustomerCard(customerCard:any):Observable<any>{
    return this.http.put(this.apiServerUrl+'/deleteCustomerCard', customerCard);
  }

  deleteCheck(check:any):Observable<any>{
    return this.http.put(this.apiServerUrl+"/deleteCheck", check);
  }

  getCategoryReport():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getCategoryReport');
  }
  getProductReport():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getProductReport');
  }
  getStoreProductReport():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getStoreProductReport');
  }
  getEmployeeReport():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getEmployeeReport');
  }
  getCustomerCardReport():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getCustomerCardReport');
  }

  getEmployeesSortedBySurname():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getEmployeesSortedBySurname');
  }
  getCashiersSortedBySurname():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getCashiersSortedBySurname');
  }
  getCategoriesSortedByName():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getCategoriesSortedByName');
  }
  getStoreProductsSortedByAmount():Observable<any[]>{
    return this.http.get<any[]>(this.apiServerUrl+'/getStoreProductsSortedByAmount');
  }
  getEmployeesBySurname(data:{surname:string}):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+'/getEmployeesBySurname', data);
  }
  getCustomersWithPercentSortedBySurname(data:{percent:string}):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+'/getCustomersWithPercentSortedBySurname', data);
  }
  getChecksInfoOfCashierInPeriod(data:{idCashier:string, startDate:Date, endDate:Date}):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+'/getChecksInfoOfCashierInPeriod', data);
  }
  getAllChecksInfoInPeriod(data:{startDate:Date, endDate:Date}):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+'/getAllChecksInfoInPeriod', data);
  }
  getTotalIncomeFromChecksOfCashierInPeriod(data:{idCashier:string, startDate:Date,endDate:Date}):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+'/getTotalIncomeFromChecksOfCashierInPeriod', data);
  }
  getTotalIncomeFromChecksInPeriod(data:{idCashier:string, startDate:Date,endDate:Date}):Observable<any[]>{
    return this.http.post<any[]>(this.apiServerUrl+'/getTotalIncomeFromChecksInPeriod', data);
  }
  getTotalAmountOfProductSoldInPeriod(data:{productName:string, startDate:Date,endDate:Date}):Observable<any>{
    return this.http.post<any>(this.apiServerUrl+'/getTotalAmountOfProductSoldInPeriod', data);
  }

  updatePromoStoreProductList():Observable<boolean>{
    return this.http.patch<boolean>(this.apiServerUrl+'/updatePromoStoreProductList', null);
  }


}
