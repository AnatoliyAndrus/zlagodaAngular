import { Component } from '@angular/core';
import {ManagerHeaderComponent} from "../manager-header/manager-header.component";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  selectedHeaderOption:string='employees';

  showEmployees() { this.selectedHeaderOption = 'employees';}
  showProducts() {this.selectedHeaderOption = 'products';}
  showStoreProducts() { this.selectedHeaderOption = 'store_products';}
  showClients() {this.selectedHeaderOption = 'clients';}
  showChecks() {this.selectedHeaderOption = 'checks';}
  showCategories() {this.selectedHeaderOption = 'categories';}



}
