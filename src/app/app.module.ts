import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ManagerHeaderComponent } from './manager-header/manager-header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ManagerComponent } from './manager/manager.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BodyComponent } from './body/body.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ManagerHeaderComponent,
    ManagerComponent,
    SideMenuComponent,
    BodyComponent,
  ],
  imports: [
    MatRadioModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
  useValue: { color: 'accent' },}],

  bootstrap: [AppComponent]
})
export class AppModule {

}
// D:\Projects\HtmlProjects\zlagoda\zlagodaAngular
