import { Component, OnInit } from '@angular/core';
import {Product} from './../../model/app.product.model';
import {Logic} from './../../model/logic';
import {Manufacturers, Categories} from './../../model/app.constants';
import { CommentStmt } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productform-component',
  templateUrl: './app.productform.view.html'
})
// OnInit: Angular Component's lifecycle interface
export class ProductFormComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  categories = Categories;
  manufacturers = Manufacturers;
  private logic: Logic;
  columnHeaders: Array<string>;
  emps:Array<any>;
  constructor() {
    this.product = new Product(0, '', '', '', '', '', 0);
    this.products = new Array<Product>();
    this.logic = new Logic();
    this.columnHeaders = new Array<string>();
    this.emps = new Array<any>();
    this.emps.push({id:1, name:'A'});
    this.emps.push({id:2, name:'B'});

  }

  // method from OnInit interface
  // this will be invoked immediatly aftre constructor
  // write some hevy logic in this method that we cannot
  // affor to write in ctor e.g. External Service calls
  ngOnInit(): void {
    this.products  =  this.logic.getProducts();
    console.log(JSON.stringify(this.products));
    // read properties from product object
    for (const p of Object.keys(this.product)) {
       this.columnHeaders.push(p);
    }
    console.log(JSON.stringify(this.columnHeaders));
  }
  clear(): void {
    this.product = new Product(0, '', '', '', '', '', 0);
  }
  save(): void {
    this.products = this.logic.addProduct(this.product);
    console.log(JSON.stringify(this.products));
  }
  getSelectedProduct(event): void {
     this.product = Object.assign({}, event);
  }
}
