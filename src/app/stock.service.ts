import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


 @Injectable(/*{
  providedIn: 'root',
} */)
export class StockService {

  constructor(private http: HttpClient) { }
  getAllStock() {
    return this.http.get('/routes/stock/').map((stock: any) => {
      return stock;
    });
  }
}
