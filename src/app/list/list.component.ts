import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  // @Input() onItemClick: (item: any) => void = (item: any)=>{};
  @Input() items: any[] = [];

  getObjectKeys(obj: any) {
    console.log(obj);
    return Object.keys(obj).map(
      key=>{if(key===null||key===undefined){return '';}else{return key;}});
  }

  isArray(obj: any): boolean {
    return Array.isArray(obj);
  }


}
