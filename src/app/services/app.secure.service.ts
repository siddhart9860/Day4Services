import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register, ResponseData, Login, ProductServiceModel } from '../model/app.product.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SecureService {
  constructor(private httpClient: HttpClient) { }

  registerUser(user: Register): Observable<ResponseData> {
     let resp: Observable<ResponseData>;
     resp = this.httpClient.post<ResponseData>('http://localhost:5000/api/Auth/Register',
      user, {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      });
     return  resp;
  }

  loginUser(user: Login): Observable<ResponseData> {
    let resp: Observable<ResponseData>;
    resp = this.httpClient.post<ResponseData>('http://localhost:5000/api/Auth/Login',
     user, {
       headers: new HttpHeaders({
         'Content-Type' : 'application/json'
       })
     });
    return  resp;
 }

  getProducts(token: string): Observable<ProductServiceModel[]> {
    let resp: Observable<ProductServiceModel[]>;
    resp = this.httpClient.get<ProductServiceModel[]>('http://localhost:5000/api/Products', {
      headers: new HttpHeaders({
        'AUTHORIZATION' : `Bearer ${token}`
      })
    });
    return resp;
  }

}
