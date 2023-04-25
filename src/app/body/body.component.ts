import {Component, Input} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ManagerService} from "../manager.service";
import {HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs";
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  managerService:ManagerService;

  constructor(managerService:ManagerService) {
    this.managerService = managerService;
  }

  currentMenuItem:string='';

  @Input() menuItems!:string[];

  showCertainOption(optionName:string){
    this.currentMenuItem = optionName;
  }

  onAddEmloyee(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-employee-form').click();
    this.managerService.addEmployee(addForm.value)
      .pipe(
        tap(response => {
          console.log(response);
          addForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
          throw error;
        })
      )
      .subscribe();
  }
}
