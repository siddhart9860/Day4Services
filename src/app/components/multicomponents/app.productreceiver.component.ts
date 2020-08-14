import { Component, OnInit } from '@angular/core';
import { ProductsData } from '../../model/app.constants';
import { CommunicationService } from '../../services/app.communication.sevice';
import { Product } from '../../model/app.product.model';
@Component({
  selector: 'app-productreceiver-component',
  template: `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Product Row Id</th>
        <th>Product Id</th>
        <th>Product Name</th>
        <th>Category Name</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let prd of FilteredProducts">
        <td>{{prd.ProductRowId}}</td>
        <td>{{prd.ProductId}}</td>
        <td>{{prd.ProductName}}</td>
        <td>{{prd.CategoryName}}</td>
      </tr>
    </tbody>
  </table>
  `
})

export class ProductReceiverComponent implements OnInit {
  products = ProductsData;
  catName: string;
  private filteredProducts: Array<Product>;
  // inject the service
  constructor(private serv: CommunicationService) {
    this.catName = '';
  }
  // subscribe to the event from the service
  // and receive data
  // one time subscription
  ngOnInit(): void {
     console.log('Subscription');
     this.serv.notifyData.subscribe(d => {
        this.catName = d;
     });
  }

  //  read-only property that will returned filtered products
  // IMP** When the component is updated with catName, this read-only
  // property will be executed
  get FilteredProducts(): Array<Product> {
     this.filteredProducts = new   Array<Product>();
     if (this.catName !== '' || this.catName.length > 0) {
        this.filteredProducts = this.products.filter((prd,i) => {
          return prd.CategoryName === this.catName;
        });
     } else {
       this.filteredProducts  = this.products;
     }
     return this.filteredProducts;
  }
}
