import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cashier-header',
  templateUrl: './cashier-header.component.html',
  styleUrls: ['./cashier-header.component.css']
})
export class CashierHeaderComponent {

  @Output() selectProductsCashier = new EventEmitter<void>();
  @Output() selectStoreProductsCashier = new EventEmitter<void>();
  @Output() selectClientsCashier = new EventEmitter<void>();
  @Output() selectChecksCashier = new EventEmitter<void>();
  @Output() selectProfileCashier = new EventEmitter<void>();

}

