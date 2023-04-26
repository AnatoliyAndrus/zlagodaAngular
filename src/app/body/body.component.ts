import {Component, Input} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ManagerService} from "../manager.service";
import {HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, pipe, tap, toArray} from "rxjs";
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';
import {MutualService} from "../mutual.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  managerService:ManagerService;
  mutualService:MutualService;

  constructor(managerService:ManagerService, mutualService:MutualService) {
    this.managerService = managerService;
    this.mutualService = mutualService;
  }

  currentMenuItem:string='';

  @Input() menuItems!:string[];

  currentItemsInList:any[] = [];
  currentValue:any=0;
  dropListsItems:any[][] = [];

  showCertainOption(optionName:string){
    this.currentMenuItem = optionName;
    switch (this.currentMenuItem){
      case 'Report employee':
        this.getEmployeesReport();
        break;
      case 'Report clients':
        this.getCustomerCardReport();
        break;
      case 'Report products':
        this.getProductReport();
        break;
      case 'Report store products':
        this.getStoreProductReport();
        break;
      case 'Report categories':
        this.getCategoriesReport();
        break;
      case 'Show all employees sorted by surname':
        this.getAllEmployeesSortedBySurname();
        break;
      case 'Show cashiers sorted by surname':
        this.getAllCashiersSortedBySurname();
        break;
      case 'Show all products sorted by name':
        this.getAllProductsSortedByName();
        break;
      case 'Search by category sorted by name':
        this.getCategoriesToDropList(0);
        break;
      case 'Total amount of product sold in concrete period':
        this.getProductsToDropList(0);
        break;
      case 'Show all store products sorted by amount':
        this.getStoreProductsSortedByAmount();
        break;
      case 'Get info by UPC':
        this.getStoreProductsToDropList(0);
        break;
      case 'Update promo store products list':
        this.updatePromoProducts();
        break;
    }
    console.log(this.currentMenuItem);
  }

  //employee forms
  onAddEmployee(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-employee-form').click();
    this.managerService.addEmployee(addForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          addForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onUpdateEmployee(updateForm: NgForm): void {
    // @ts-ignore
    document.getElementById('update-employee-form').click();
    this.managerService.updateEmployee(updateForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          updateForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          updateForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onRemoveEmployee(removeForm: NgForm): void {
    // @ts-ignore
    document.getElementById('remove-employee-form').click();
    this.managerService.deleteEmployee(removeForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          removeForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          removeForm.reset();
          throw error;
        })
      )
      .subscribe();
  }

  //product forms
  onAddProduct(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-product-form').click();
    this.managerService.addProduct(addForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          addForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onUpdateProduct(updateForm: NgForm): void {
    // @ts-ignore
    document.getElementById('update-product-form').click();
    this.managerService.updateProduct(updateForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          updateForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          updateForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onRemoveProduct(removeForm: NgForm): void {
    // @ts-ignore
    document.getElementById('remove-product-form').click();
    this.managerService.deleteProduct(removeForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          removeForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          removeForm.reset();
          throw error;
        })
      )
      .subscribe();
  }

  //store product forms
  onAddStoreProduct(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-store-product-form').click();
    this.managerService.addStoreProduct(addForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          addForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onUpdateStoreProduct(updateForm: NgForm): void {
    // @ts-ignore
    document.getElementById('update-store-product-form').click();
    this.managerService.updateStoreProduct(updateForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          updateForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          updateForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onRemoveStoreProduct(removeForm: NgForm): void {
    // @ts-ignore
    document.getElementById('remove-store-product-form').click();
    this.managerService.deleteStoreProduct(removeForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          removeForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          removeForm.reset();
          throw error;
        })
      )
      .subscribe();
  }

  //customer card forms
  onAddCustomerCard(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-customer-card-form').click();
    this.mutualService.addCustomerCard(addForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          addForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onUpdateCustomerCard(updateForm: NgForm): void {
    // @ts-ignore
    document.getElementById('update-customer-card-form').click();
    this.mutualService.updateCustomerCard(updateForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          updateForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          updateForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onRemoveCustomerCard(removeForm: NgForm): void {
    // @ts-ignore
    document.getElementById('remove-customer-card-form').click();
    this.managerService.deleteCustomerCard(removeForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          removeForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          removeForm.reset();
          throw error;
        })
      )
      .subscribe();
  }

  //check forms
  onRemoveCheck(removeForm: NgForm): void {
    // @ts-ignore
    document.getElementById('remove-check-form').click();
    this.managerService.deleteCheck(removeForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          removeForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          removeForm.reset();
          throw error;
        })
      )
      .subscribe();
  }

  //category forms
  onAddCategory(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-category-form').click();
    this.managerService.addCategory(addForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          addForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onUpdateCategory(updateForm: NgForm): void {
    // @ts-ignore
    document.getElementById('update-category-form').click();
    this.managerService.updateCategory(updateForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          updateForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          updateForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onRemoveCategory(removeForm: NgForm): void {
    // @ts-ignore
    document.getElementById('remove-category-form').click();
    this.managerService.deleteCategory(removeForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          removeForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          removeForm.reset();
          throw error;
        })
      )
      .subscribe();
  }

  updatePromoProducts(){
    console.log('meme');
    this.managerService.updatePromoStoreProductList().subscribe();
  }


  //getters of data to item list
  getEmployeesReport(){
    this.managerService.getEmployeeReport().subscribe((result: any[]) => {
      this.currentItemsInList = result;
      console.log(result);
    });
  }
  getCustomerCardReport(){
    this.managerService.getCustomerCardReport().subscribe((result: any[]) => {
      this.currentItemsInList = result;
      console.log(result);
    });
  }
  getProductReport(){
    this.managerService.getProductReport().subscribe((result: any[]) => {
      this.currentItemsInList = result;
      console.log(result);
    });
  }
  getStoreProductReport(){
    this.managerService.getStoreProductReport().subscribe((result: any[]) => {
      this.currentItemsInList = result;
      console.log(result);
    });
  }
  getCategoriesReport(){
    this.managerService.getCategoryReport().subscribe((result: any[]) => {
      this.currentItemsInList = result;
      console.log(result);
    });
  }
  getAllEmployeesSortedBySurname(){
    this.managerService.getEmployeesSortedBySurname().subscribe((result: any[]) => {
      this.currentItemsInList = result;
      console.log(result);
    });
  }
  getAllCashiersSortedBySurname(){
    this.managerService.getCashiersSortedBySurname().subscribe((result: any[]) => {
      this.currentItemsInList = result;
    });
  }
  getStoreProductsSortedByAmount(){
    this.managerService.getStoreProductsSortedByAmount().subscribe((result: any[]) => {
      console.log(result);
      this.currentItemsInList = result;
    });
  }

  onSearchBySurname(searchBySurnameForm: NgForm){
    // @ts-ignore
    document.getElementById('search-by-surname-form').click();
    this.managerService.getEmployeesBySurname(searchBySurnameForm.value)
      .pipe(
        tap((response:any[]) => {
          this.currentItemsInList = response;
          this.currentMenuItem = 'Search by surname list';
          searchBySurnameForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          searchBySurnameForm.reset();
          throw error;
        })
      )
      .subscribe();
  }

  onSearchProductByCategoryName(searchForm:NgForm){
    console.log(searchForm.value);
    // @ts-ignore
    document.getElementById('search-product-by-category-form').click();
    this.mutualService.getProductsWithCategoryNameSortedByName(searchForm.value)
      .pipe(
        tap((response:any[]) => {
          this.currentItemsInList = response;
          console.log(response);
          this.currentMenuItem = 'Search product by category list';
          searchForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          searchForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onTotalAmountOfProductSoldInPeriod(searchForm:NgForm){
    console.log(searchForm.value)
    // @ts-ignore
    document.getElementById('total-amount-product-sold-in-period-form').click();
    this.managerService.getTotalAmountOfProductSoldInPeriod(searchForm.value)
      .pipe(
        tap((response:any) => {
          console.log(response);
          this.currentMenuItem = 'Total amount of product sold in concrete period list';
          this.currentValue = response;
          searchForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          searchForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onGetInfoByUPC(searchForm:NgForm){
    console.log(searchForm.value)
    // @ts-ignore
    document.getElementById('get-info-by-upc-form').click();
    this.mutualService.getStoreProductInfoByUPC(searchForm.value)
      .pipe(
        tap((response:any) => {
          console.log(response);
          this.currentMenuItem = 'Get info by UPC list';
          this.currentItemsInList = [response];
          searchForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          searchForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onShowPromotionalProductsSortedByNameAmount(searchForm:NgForm){
    console.log(searchForm.value)
    // @ts-ignore
    document.getElementById('promotional-products-sorted-by-name-amount-form').click();
    this.mutualService.getPromotionalProductsSorted(searchForm.value)
      .pipe(
        tap((response:any[]) => {
          console.log(response);
          this.currentMenuItem = 'Show all promo products sorted by name/amount list';
          this.currentItemsInList = response;
          searchForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          searchForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
  onShowNonPromotionalProductsSortedByNameAmount(searchForm:NgForm){
    console.log(searchForm.value)
    // @ts-ignore
    document.getElementById('non-promotional-products-sorted-by-name-amount-form').click();
    this.mutualService.getNonPromotionalProductsSorted(searchForm.value)
      .pipe(
        tap((response:any[]) => {
          console.log(response);
          this.currentMenuItem = 'Show all non-promo products sorted by name/amount list';
          this.currentItemsInList = response;
          searchForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          searchForm.reset();
          throw error;
        })
      )
      .subscribe();
  }


  getAllProductsSortedByName(){
    this.mutualService.getProductsSortedByName().subscribe((result: any[]) => {
      this.currentItemsInList = result;
    });
  }

  //getters of data to drop lists
  getCategoriesToDropList(index:number){
    this.mutualService.getCategoryList().subscribe((result: any[]) => {
      this.dropListsItems[index] = result;
    });
  }
  getProductsToDropList(index:number){
    this.mutualService.getProductList().subscribe((result: any[]) => {
      console.log(result);
      this.dropListsItems[index] = result;
    });
  }
  getStoreProductsToDropList(index:number){
    this.mutualService.getStoreProductList().subscribe((result: any[]) => {
      console.log(result);
      this.dropListsItems[index] = result;
    });
  }


}
