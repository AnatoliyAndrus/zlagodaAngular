import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  public authenticated=false;
  public emplRole='';
  public idEmployee='aaaaa';
}
