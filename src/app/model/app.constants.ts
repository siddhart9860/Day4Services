import { Product } from './app.product.model';
export const Categories = [
  'Electronics', 'Electrical', 'Food'
];

export const Manufacturers = [
  'HP', 'IBM', 'Bajaj', 'Phillipse', 'Parle', 'TATA'
];


export const CategoriesData = [
  {CategoryId: 201, CategoryName: 'Electronics'},
  {CategoryId: 202, CategoryName: 'Electrical'},
  {CategoryId: 203, CategoryName: 'Food'}
];

export const ProductsData: Array<Product> = [
  new Product(1, 'Prd001', 'Laptop', 'Electronics', 'HP', 'Gaming', 120000),
 new Product(2, 'Prd002', 'Iron', 'Electrical', 'Bajaj', 'Cotton Friendly', 3000),
 new Product(3, 'Prd003', 'Biscuts', 'Food', 'Parle', 'Glucose', 10),
];
