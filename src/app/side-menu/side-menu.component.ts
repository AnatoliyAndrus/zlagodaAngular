import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  @Input() menuItems:string[] = [];
  @Output() onButtonClickFunction:EventEmitter<string>= new EventEmitter<string>();



}
