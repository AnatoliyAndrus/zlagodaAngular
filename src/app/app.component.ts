import { Component } from '@angular/core';
import {ListComponent} from "./list/list.component";
import {ManagerHeaderComponent} from "./manager-header/manager-header.component";
import {GlobalService} from "./global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zlagoda';
  globalService:GlobalService;
  doNothing(item:any) {
    console.log("nothing");
  }
  constructor(globalService:GlobalService) {
    this.globalService=globalService;
  }

  userRole='';
  //
  currentDate:Date=new Date();

  changeUserRole(){
    console.log('nee')
    console.log(this.globalService.emplRole);
    this.userRole=this.globalService.emplRole;
  }


}

