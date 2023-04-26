import { Component } from '@angular/core';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent {

  selectedHeaderOption:string='products';

  showProductsCashier() {this.selectedHeaderOption = 'products';}
  showStoreProductsCashier() { this.selectedHeaderOption = 'store_products';}
  showClientsCashier() {this.selectedHeaderOption = 'clients';}
  showChecksCashier() {this.selectedHeaderOption = 'checks';}
  showProfileCashier() { this.selectedHeaderOption = 'cashier';}

}
