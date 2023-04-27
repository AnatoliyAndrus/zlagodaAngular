import { Component } from '@angular/core';
import {CashierService} from "../cashier.service";
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent {
  cashierService:CashierService;
  globalService:GlobalService;
  selectedHeaderOption:string='products';
  idEmployee:string='';
  emplFullName:string='';
  emplRole:string='';
  salary:number=0;
  dateOfBirth:Date=new Date();
  dateOfStart:Date=new Date();
  phoneNumber:string='';
  city:string='';
  street:string='';
  zipCode:string='';
  constructor(cashierService:CashierService, globalService:GlobalService) {
    this.cashierService=cashierService;
    this.globalService=globalService;
  }

  showProductsCashier() {this.selectedHeaderOption = 'products';}
  showStoreProductsCashier() { this.selectedHeaderOption = 'store_products';}
  showClientsCashier() {this.selectedHeaderOption = 'clients';}
  showChecksCashier() {this.selectedHeaderOption = 'checks';}
  showProfileCashier() { this.selectedHeaderOption = 'profile'; this.getCashierInfo()}

  getCashierInfo(){
    console.log(this.globalService.idEmployee);
    this.cashierService.getSelfInfo({idCashier:this.globalService.idEmployee}).subscribe((result: any) => {
      console.log(result);
      this.idEmployee=result["Employee ID"];
      this.emplFullName=result["Name"];
      this.emplRole=result["Role"];
      this.salary=result["Salary"];
      this.dateOfBirth=result["Date of birth"];
      this.dateOfStart=result["Date of start"];
      this.phoneNumber=result["Phone"];
      this.city=result["City"];
      this.street=result["Street"];
      this.zipCode=result["Zip code"];
      console.log(this.idEmployee);

    });
  }
}
