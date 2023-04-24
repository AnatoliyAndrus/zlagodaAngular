import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  currentMenuItem:string='';

  @Input() menuItems!:string[];

  constructor() {
    console.log("hello fellas");
    console.log(this.menuItems);
  }

  showCertainOption(optionName:string){
    this.currentMenuItem = optionName;
  }
  showMenuItems(){
    console.log(this.menuItems);
  }
}
