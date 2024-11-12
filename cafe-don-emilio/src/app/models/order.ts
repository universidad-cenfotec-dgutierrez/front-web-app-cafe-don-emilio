/**
 * Interface for the Product in the application
 */
interface IProduct {
  name: string;
  price: number;
  format: string;
  image: string;
}

/**
 * Interface for the User Order in the application
 */
interface IUserOrder {
  correoUsuario: string;
  listaProductos: IProduct[];
}

/**
 * Model for the Product in the application
 */
export class Product {
  name: string;
  price: number;
  format: string;
  image: string;

  constructor(values: IProduct) {
    this.name = values.name;
    this.price = values.price;
    this.format = values.format;
    this.image = values.image;
  }

  /**
   * Method to create a Product instance from a JSON object
   * @param json The JSON object with product data
   * @returns A new Product instance
   */
  static desdeJson(json: any): Product {
    return new Product({
      name: json.name,
      price: json.price,
      format: json.format,
      image: json.image,
    });
  }
}

/**
 * Model for the User Order in the application
 */
export class UserOrder {
  correoUsuario: string;
  listaProductos: Product[];

  constructor(values: IUserOrder) {
    this.correoUsuario = values.correoUsuario;
    this.listaProductos = values.listaProductos.map(product => new Product(product));
  }

  /**
   * Method to create a UserOrder instance from a JSON object
   * @param json The JSON object with user order data
   * @returns A new UserOrder instance
   */
  static desdeJson(json: any): UserOrder {
    return new UserOrder({
      correoUsuario: json.correoUsuario,
      listaProductos: json.listaProductos.map((item: any) => Product.desdeJson(item)),
    });
  }
}
