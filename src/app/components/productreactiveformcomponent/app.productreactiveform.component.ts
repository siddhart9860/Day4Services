import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Product} from '../../model/app.product.model';
import {Logic} from '../../model/logic';
import {Manufacturers, Categories} from '../../model/app.constants';
import {CustomValidator} from './app.custom.validator';

@Component({
  selector: 'app-productreactiveform-component',
  templateUrl: './app.productreactiveform.view.html'
})
// OnInit: Angular Component's lifecycle interface
export class ProductReactiveFormComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  categories = Categories;
  manufacturers = Manufacturers;
  private logic: Logic;
  columnHeaders: Array<string>;

  // define FormGroup instance
  frmProduct: FormGroup;
  constructor() {
    this.product = new Product(0, '', '', '', '', '', 0);
    this.products = new Array<Product>();
    this.logic = new Logic();
    this.columnHeaders = new Array<string>();

    // create an instance of FormGroup and bind Product Model to it
    // using FormControl class that accepts the Public property of Model class
    // formGroup instance will be bind with [formGroup] property of <form></form>
    // The key of FormControl will be bound with 'formControlName' of editable element
    this.frmProduct = new FormGroup({
       ProductRowId : new FormControl(this.product.ProductRowId,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(5),
          Validators.pattern('[0-9]*'),
          CustomValidator.CheckEven
        ])),
       ProductId : new FormControl(this.product.ProductId),
       ProductName : new FormControl(this.product.ProductName),
       CategoryName : new FormControl(this.product.CategoryName),
       Manufacturer : new FormControl(this.product.Manufacturer),
       Description : new FormControl(this.product.Description),
       BasePrice : new FormControl(this.product.BasePrice)
    });


  }


  ngOnInit(): void {
    this.products  =  this.logic.getProducts();
    console.log(JSON.stringify(this.products));
    // read properties from product object
    for (const p of Object.keys(this.product)) {
       this.columnHeaders.push(p);
    }

  }
  clear(): void {
    this.product = new Product(0, '', '', '', '', '', 0);
    // pass the empty product to the value of FormGroup
    this.frmProduct.setValue(this.product);
  }
  save(): void {
    // read the value posted from the FromGroup
    this.product = this.frmProduct.value;
    this.products = this.logic.addProduct(this.product);
    console.log(JSON.stringify(this.products));
  }
  getSelectedProduct(event): void {

   this.product = Object.assign({}, event);
   this.frmProduct.setValue(this.product);
  }
}
