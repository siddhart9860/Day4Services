import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/app.httpservvice.service';
import { Product, Register, Login } from '../../model/app.product.model';
import { SecureService } from '../../services/app.secure.service';

@Component({
  selector: 'app-service-component',
  template: `
    <input type="button" value="Get Data" class="btn btn-warning" (click)="getData()"/>
    <hr/>
    <input type="button" value="Post Data" class="btn btn-success" (click)="saveData()"/>
    <hr/>
    <div>
      {{products | json}}
    </div>
    <h2>Secure Call</h2>
    <input type="button" value="Register" class="btn btn-warning"
     (click)="registerUser()"/>
    <hr/>
    <input type="button" value="Login" class="btn btn-success"
    (click)="loginUser()"/>
    <hr/>
    <input type="button" value="Get Products" class="btn btn-danger"
     (click)="getProducts()" />

  `
})

export class ServiceComponent implements OnInit {
  message: string;
  products: Array<Product>;
  // inject the service
  constructor(private serv: HttpService, private secureServ: SecureService) {
    this.message = '';
    this.products = new Array<Product>();
  }

  ngOnInit(): void {
    this.loadData();
  }


  registerUser(): void {
    const user = new Register('A2@msit.com', 'P@ssw0rd_', 'P@ssw0rd_');
    this.secureServ.registerUser(user).subscribe((resp) => {

      this.message = `Data Received Successfully ${resp.message}`;
    }, (error) => {
      this.message = `Error Occured ${error}`;
    });
  }

  loginUser(): void {
    const user = new Login('A2@msit.com', 'P@ssw0rd_');
    this.secureServ.loginUser(user).subscribe((resp) => {
      // saving token in session storage
      sessionStorage.setItem('token', resp.message);
      this.message = `Data Received Successfully`;
    }, (error) => {
      this.message = `Error Occured ${error}`;
    });
  }

  getProducts(): void {
    const token = sessionStorage.getItem('token');
    this.secureServ.getProducts(token).subscribe((resp) => {
       console.log(`Received Producs After AUthentication
        ${JSON.stringify(resp)}`);
       this.message = `Data Received Successfully`;
    }, (error) => {
      this.message = `Error Occured ${error}`;
    });
  }




  private loadData(): void {
    this.serv.getData().subscribe((resp) => {
      this.products = resp;
      this.message = `Data Received Successfully`;
    }, (error) => {
      this.message = `Error Occured ${error}`;
    });
  }

  getData(): void {
    this.loadData();
  }

  saveData(): void {
     const prd = new Product(
       0,
       'Prd1004',
       'Kayboard',
       'Electronics',
       'IBM',
       '105 Keys',
       1200
     );
     this.serv.postData(prd).subscribe((resp) => {
       console.log(`Received data after post ${JSON.stringify(resp)}`);
       this.message = `Data Saved Successfully`;
    }, (error) => {
      this.message = `Error Occured in Post ${error}`;
    });
  }
}
