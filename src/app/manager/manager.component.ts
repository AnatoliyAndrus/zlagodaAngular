import { Component } from '@angular/core';
import {ManagerHeaderComponent} from "../manager-header/manager-header.component";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  selectedHeaderOption:string='employees';

  showEmployees() {console.log("this works!"); this.selectedHeaderOption = 'employees';}
  showProducts() {console.log("this works!"); this.selectedHeaderOption = 'products';}
  showStoreProducts() {console.log("this works!"); this.selectedHeaderOption = 'store_products';}
  showClients() {console.log("this works!"); this.selectedHeaderOption = 'clients';}
  showChecks() {console.log("this works!"); this.selectedHeaderOption = 'checks';}
  showCategories() {console.log("this works!"); this.selectedHeaderOption = 'categories';}



}
