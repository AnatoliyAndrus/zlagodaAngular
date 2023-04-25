import {Component, Input} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ManagerService} from "../manager.service";
import {HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, toArray} from "rxjs";
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
    }
    console.log(this.currentMenuItem);
  }

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

}
