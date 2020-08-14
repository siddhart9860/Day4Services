import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../model/app.product.model';
@Injectable({providedIn: 'root'})
export class HttpService {
  private url: string;
  // inject HttpClient
  // HttpClient will be resolved by HttpClientModule
  constructor(private http: HttpClient) {
    this.url =  'https://apiapptrainingnewapp.azurewebsites.net/api/Products';
  }

  getData(): Observable<Product[]>{
    let resp: Observable<Product[]>; //  resolve the Product[] for subscriber
    resp = this.http.get<Product[]>(this.url);
    return resp;
  }
  postData(prd: Product): Observable<Product> {
    let resp: Observable<Product>;
    resp = this.http.post<Product>(this.url, prd, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    });
    return resp;
  }

  putData(prd: Product): Observable<Product> {
    let resp: Observable<Product>;
    resp = this.http.put<Product>(`${this.url}/${prd.ProductRowId}`, prd, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    });
    return resp;
  }

  deleteData(id: number): Observable<Product> {
    let resp: Observable<Product>;
    resp = this.http.delete<Product>(`${this.url}/${id}`);
    return resp;
  }

}
