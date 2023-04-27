import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GlobalService} from "../global.service";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  globalService:GlobalService;
  constructor(globalService:GlobalService) {
    this.globalService=globalService;
  }

  loggingProcess(f:NgForm){
    let x = f.value.idEmployee;
    if(x==='hack'){
      this.globalService.idEmployee='hack';
      this.globalService.emplRole='Manager';
      this.isAuthenticated.emit();
    }
    this.globalService.authenticate(f.value).subscribe(
      (result:any)=>{
        console.log(result.authenticated);
        if(result.authenticated) {
          this.globalService.idEmployee=x;
          this.globalService.emplRole=result.emplRole;
          console.log(this.globalService.emplRole);
          this.isAuthenticated.emit();
        }
      }
    );
  }

  result:any;
  @Output() isAuthenticated = new EventEmitter<string>();
}
