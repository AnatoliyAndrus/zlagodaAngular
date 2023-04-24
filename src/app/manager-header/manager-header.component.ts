import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-manager-header',
  templateUrl: './manager-header.component.html',
  styleUrls: ['./manager-header.component.css']
})
export class ManagerHeaderComponent{


  @Output() selectEmployees = new EventEmitter<void>();
  @Output() selectProducts = new EventEmitter<void>();
  @Output() selectStoreProducts = new EventEmitter<void>();
  @Output() selectClients = new EventEmitter<void>();
  @Output() selectChecks = new EventEmitter<void>();
  @Output() selectCategories = new EventEmitter<void>();
}
