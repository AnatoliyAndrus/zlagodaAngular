import {Component, Input, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent{
  constructor(private employeeService: EmployeeService){
    console.log(this.items);
  }

  @Input() onItemClick: (item: any) => void = (item: any)=>{};
  @Input() items: any[] = [];

  getObjectKeys(obj: any) {
    console.log(obj);
    return Object.keys(obj);
  }
}
