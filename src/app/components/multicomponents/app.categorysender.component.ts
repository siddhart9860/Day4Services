import { Component, OnInit } from '@angular/core';
import { CategoriesData } from '../../model/app.constants';
import { CommunicationService } from '../../services/app.communication.sevice';
import { Category } from '../../model/app.category.model';
@Component({
  selector: 'app-categorysender-component',
  template: `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Category Id</th>
        <th>Category Name</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let cat of categories" (click)="getCategoey(cat)">
        <td>{{cat.CategoryId}}</td>
        <td>{{cat.CategoryName}}</td>
      </tr>
    </tbody>
  </table>
  `
})

export class CategorySenderComponent implements OnInit {
  categories = CategoriesData;
  // inject the Communication Service
  constructor(private serv: CommunicationService) { }

  ngOnInit() { }

  getCategoey(cat: Category): void {
    // call method from service that will emit event
      this.serv.writeData(cat.CategoryName);
  }
}
