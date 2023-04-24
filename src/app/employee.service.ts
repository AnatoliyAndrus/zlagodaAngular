import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employers';
  constructor(private http: HttpClient) {}

  getEmployers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // выполнение GET-запроса к серверу и получение данных в формате Employer[]
  }


  getTestEmployees(): any[]{
    let arr: any[] = [{ name: 'John', age: 25, position: 'Developer' },
      { name: 'Alice', age: 30, position: 'Manager' },
      { name: 'Bob', age: 35, position: 'Designer' }];
    return arr;
  }
}
