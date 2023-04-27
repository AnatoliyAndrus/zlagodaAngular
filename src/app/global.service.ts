import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  http:HttpClient;
  constructor(http:HttpClient) {
    this.http=http;
  }
  public authenticated=false;
  public emplRole='';
  public idEmployee='aaaaa';

  private apiServerUrl = 'http://localhost:8080/general'

  authenticate(data:any):Observable<any>{
    return this.http.post(this.apiServerUrl+"/authenticate", data);
  }
}
