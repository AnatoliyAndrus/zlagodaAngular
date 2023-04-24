import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ManagerHeaderComponent } from './manager-header/manager-header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ManagerComponent } from './manager/manager.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BodyComponent } from './body/body.component';


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
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
// D:\Projects\HtmlProjects\zlagoda\zlagodaAngular
