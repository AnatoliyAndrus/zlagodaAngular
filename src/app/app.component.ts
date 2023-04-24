import { Component } from '@angular/core';
import {EmployeeService} from "./employee.service";
import {ListComponent} from "./list/list.component";
import {ManagerHeaderComponent} from "./manager-header/manager-header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zlagoda';

  constructor(private employeeService: EmployeeService){}

  doNothing(item:any) {
    console.log("nothing");
  }

  getTestEmployees() : any[]{
    return this.employeeService.getTestEmployees();
  }

}

