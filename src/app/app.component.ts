import { Component } from '@angular/core';
import {ListComponent} from "./list/list.component";
import {ManagerHeaderComponent} from "./manager-header/manager-header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zlagoda';


  doNothing(item:any) {
    console.log("nothing");
  }


}

