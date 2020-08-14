export class Product {
  constructor(
    public ProductRowId: number,
    public ProductId: string,
    public ProductName: string,
    public CategoryName: string,
    public Manufacturer: string,
    public Description: string,
    public BasePrice: number
  ){}
}


export class ProductServiceModel {
  constructor(
    public productRowId: number,
    public productName: string,
    public price: number ) {
  }
}

export class Register {
  constructor(
    public Email: string,
    public Password: string,
    public ConfirmPassword: string
  ){}
}

export class Login {
  constructor(
    public UserName: string,
    public Password: string
  ){}
}

export class ResponseData {
  constructor(
    public message: string
  ){}
}
