import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ManagerHeaderComponent } from './manager-header/manager-header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ManagerComponent } from './manager/manager.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BodyComponent } from './body/body.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';
import { CashierComponent } from './cashier/cashier.component';
import { CashierHeaderComponent } from './cashier-header/cashier-header.component';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ManagerHeaderComponent,
    ManagerComponent,
    SideMenuComponent,
    BodyComponent,
    CashierComponent,
    CashierHeaderComponent,
    LoginFormComponent,
  ],
  imports: [
    MatRadioModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
  useValue: { color: 'accent' },}],

  bootstrap: [AppComponent]
})
export class AppModule {

}
// D:\Projects\HtmlProjects\zlagoda\zlagodaAngular
