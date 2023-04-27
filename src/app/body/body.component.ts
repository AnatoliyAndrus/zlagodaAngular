import {Component, Input} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm} from "@angular/forms";
import {ManagerService} from "../manager.service";
import {HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, pipe, tap, toArray} from "rxjs";
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';
import {MutualService} from "../mutual.service";
import {CashierService} from "../cashier.service";
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  cashierService:CashierService;
  managerService:ManagerService;
  mutualService:MutualService;
  globalService:GlobalService;

  constructor(managerService:ManagerService, mutualService:MutualService, cashierService:CashierService, globalService:GlobalService) {
    this.managerService = managerService;
    this.mutualService = mutualService;
    this.cashierService = cashierService;
    this.globalService = globalService;
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
      case 'Edit client': case 'Remove client':
        this.getClientsToDropList(0);
        break;
      case 'Edit employee': case 'Remove employee':
        this.getEmployeesToDropList(0);
        break;
      case 'Edit product': case 'Remove product':
        this.getProductsToDropList(0);
        this.getCategoriesToDropList(1);
        break;
      case 'Add store product':case 'Edit store product':
        this.getStoreProductsToDropList(0);
        this.getProductsToDropList(1);
        break;
      case 'Remove store product':
        this.getStoreProductsToDropList(0);
        break;
      case 'Remove check':
        this.getChecksToDropList(0);
        break;
      case 'Edit category': case 'Remove category': case 'Add product':
        this.getCategoriesToDropList(0);
        break;
      case 'Show all clients sorted by surname':
        this.getAllClientsSortedBySurname();
        break;
      case 'Show all categories sorted by name':
        this.getCategoriesSortedByName();
        break;
      case 'Show all checks of cashier in period of time': case 'Show total income from all checks of cashier in period of time': case 'Show total income from all checks in period of time':
        this.getCashiersToDropList(0);
        break;
      case 'Show all store products sorted by name':
        this.getStoreProductsSortedByName();
        break;
      case 'Search clients by surname':
        this.getClientsToDropList(0);
        break;
      case 'Add check':
        this.getPresentStoreProductsToDropList(0);
        this.getClientsToDropList(1);
        break;
      case 'Show info of check by check number':
        this.getChecksToDropList(0);
        break;
      case 'Show today\'s checks':
        this.getAllChecksMadeToday();
        break;
      case 'Get cashiers who sold more than average':
        this.getCashiersWhoSoldMoreThanAverage();
        break;
      case 'Get cashiers who sold all products':
        this.getCashiersWhoSoldAllProducts();
        break;
      case 'Get clients who bought all products':
        this.getClientsWhoBoughtAllProducts();
        break;
      case 'Get clients who spent more than average':
        this.getClientsWhoBoughtMoreThanAverage();
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
  onShowAllClientsWithDiscountSortedBySurname(searchForm:NgForm){
    console.log(searchForm.value)
    // @ts-ignore
    document.getElementById('show-all-clients-with-discount-sorted-by-surname-form').click();
    this.managerService.getCustomersWithPercentSortedBySurname(searchForm.value)
      .pipe(
        tap((response:any[]) => {
          console.log(response);
          this.currentMenuItem = 'Show all clients with discount sorted by surname list';
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

  onShowAllChecksOfCashierInPeriodOfTime(searchForm:NgForm){
    console.log(searchForm.value)
    // @ts-ignore
    document.getElementById('show-all-checks-of-cashier-in-period-of-time-form').click();
    this.managerService.getChecksInfoOfCashierInPeriod(searchForm.value)
      .pipe(
        tap((response:any[]) => {
          console.log(response);
          this.currentMenuItem = 'Show all checks of cashier in period of time list';
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
  onShowAllChecksInPeriodOfTime(searchForm:NgForm){
    console.log(searchForm.value)
    // @ts-ignore
    document.getElementById('show-show-all-checks-in-period-of-time-form').click();
    this.managerService.getAllChecksInfoInPeriod(searchForm.value)
      .pipe(
        tap((response:any[]) => {
          console.log(response);
          this.currentMenuItem = 'Show all checks in period of time';
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

  onShowTotalIncomeFromAllChecksOfCashierInPeriodOfTime(searchForm:NgForm){
    console.log(searchForm.value)
    // @ts-ignore
    document.getElementById('show-total-income-from-all-checks-of-cashier-in-period-of-time-form').click();
    this.managerService.getTotalIncomeFromChecksOfCashierInPeriod(searchForm.value)
      .pipe(
        tap((response:any) => {
          console.log(response);
          this.currentMenuItem = 'Show total income from all checks of cashier in period of time list';
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
  onShowTotalIncomeFromAllChecksInPeriodOfTime(searchForm:NgForm){
    console.log(searchForm.value)
    // @ts-ignore
    document.getElementById('show-total-income-from-all-checks-in-period-of-time-form').click();
    this.managerService.getTotalIncomeFromChecksInPeriod(searchForm.value)
      .pipe(
        tap((response:any) => {
          console.log(response);
          this.currentMenuItem = 'Show total income from all checks in period of time list';
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

  getAllProductsSortedByName(){
    this.mutualService.getProductsSortedByName().subscribe((result: any[]) => {
      this.currentItemsInList = result;
    });
  }
  getAllClientsSortedBySurname(){
    this.mutualService.getCustomersSortedBySurname().subscribe((result: any[]) => {
      this.currentItemsInList = result;
    });
  }
  getCategoriesSortedByName(){
    this.managerService.getCategoriesSortedByName().subscribe((result: any[]) => {
      this.currentItemsInList = result;
    });
  }

  deleteOldChecks(){
    this.managerService.deleteOldChecks().subscribe();
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
  getPresentStoreProductsToDropList(index:number){
    this.mutualService.getStoreProductListPresent().subscribe((result: any[]) => {
      console.log(result);
      this.dropListsItems[index] = result;
    });
  }
  getEmployeesToDropList(index:number){
    this.mutualService.getEmployeeList().subscribe((result: any[]) => {
      console.log(result);
      this.dropListsItems[index] = result;
    });
  }
  getClientsToDropList(index:number){
    this.mutualService.getCustomerCardList().subscribe((result: any[]) => {
      console.log(result);
      this.dropListsItems[index] = result;
    });
  }
  getChecksToDropList(index:number){
    this.mutualService.getCheckList().subscribe((result: any[]) => {
      console.log(result);
      this.dropListsItems[index] = result;
    });
  }
  getCashiersToDropList(index:number){
    this.mutualService.getCashiersList().subscribe((result: any[]) => {
      console.log(result);
      this.dropListsItems[index] = result;
    });
  }


  ///
  ///CASHIER MENU

  onGetProductsByName(searchForm:NgForm){
    console.log(searchForm.value)
    // @ts-ignore
    document.getElementById('get-products-by-name-form').click();
    this.cashierService.getProductsByName(searchForm.value)
      .pipe(
        tap((response:any) => {
          console.log(response);

          this.currentMenuItem = 'Search products by name list';
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

  onSearchClientsBySurname(searchForm:NgForm){
    console.log(searchForm)
    // @ts-ignore
    document.getElementById('search-clients-by-surname-form').click();
    this.cashierService.getClientsBySurname(searchForm.value)
      .pipe(
        tap((response:any[]) => {
          this.currentMenuItem = 'Search clients by surname list';
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
  getStoreProductsSortedByName(){
    this.cashierService.getStoreProductsSortedByName().subscribe((result: any[]) => {
      this.currentItemsInList = result;
    });
  }

  onAddCheck(){
    this.myForm.value.idEmployee=this.globalService.idEmployee;
    console.log(this.myForm.value);
    //@ts-ignore
    document.getElementById('add-check-form').click();
    this.cashierService.addCheck(this.myForm.value)
      .pipe(
        tap((response:any) => {
          this.currentMenuItem = 'Add check list';
          this.currentItemsInList = response;
          this.myForm.reset();
          console.log(response);
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          this.myForm.reset();
          throw error;
        })
      )
      .subscribe();
  }

  myForm: FormGroup = new FormGroup({
    idEmployee: new FormControl(''),
    cardNumber: new FormControl(''),
    saleModels: new FormArray([])
  });


  get saleModels() {
    return this.myForm.get('saleModels') as FormArray;
  }

  addSale() {
    this.saleModels.push(new FormGroup({
      UPC: new FormControl(''),
      productNumber: new FormControl('')
    }));
  }

  getAllChecksMadeToday(){
    this.cashierService.getAllChecksMadeToday({idCashier:this.globalService.idEmployee}).subscribe((result: any[]) => {
      this.currentItemsInList = result;
      console.log(result);
    });
  }

  onShowCheckInfoByCheckNumber(searchForm:NgForm){
    console.log(searchForm)
    // @ts-ignore
    document.getElementById('show-check-info-by-number-form').click();
    this.cashierService.getCheckInfoByCheckNumber(searchForm.value)
      .pipe(
        tap((response:any[]) => {
          this.currentMenuItem = 'Show info of check by check number list';
          this.currentItemsInList = response;
          console.log(response);
          searchForm.reset();
          this.myForm=new FormGroup({
            idEmployee: new FormControl(''),
            cardNumber: new FormControl(''),
            saleModels: new FormArray([])
          })
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          searchForm.reset();
          this.myForm=new FormGroup({
            idEmployee: new FormControl(''),
            cardNumber: new FormControl(''),
            saleModels: new FormArray([])
          })
          throw error;
        })

      )
      .subscribe();
  }


///special
  getCashiersWhoSoldMoreThanAverage(){
    this.managerService.getCashiersWhoSoldMoreThanAverage().subscribe((result: any[]) => {
      this.currentItemsInList = result;
    });
  }
  getCashiersWhoSoldAllProducts(){
    this.managerService.getCashiersWhoSoldAllProducts().subscribe((result: any[]) => {
      this.currentItemsInList = result;
    });
  }
  getClientsWhoBoughtAllProducts(){
    this.managerService.getClientsWhoBoughtAllProducts().subscribe((result: any[]) => {
      this.currentItemsInList = result;
    });
  }
  getClientsWhoBoughtMoreThanAverage(){
    this.managerService.getClientsWhoBoughtMoreThanAverage().subscribe((result: any[]) => {
      this.currentItemsInList = result;
    });
  }

}
