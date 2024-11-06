/**
 * Interface for the Product in the application
 * @author dgutierrez
 */
interface IProduct {
  id?: number | null;
  name?: string | null;
  price?: number | null;
  format?: string | null;
  image?: string | null;
}

/**
 * Model for the Product in the application
 * @author dgutierrez
 */
export class Product {
  id: number | null;
  name: string | null;
  price: number | null;
  format: string | null;
  image: string | null;

  constructor(values: IProduct = {}) {
    this.name = null;
    this.price = null;
    this.format = null;
    this.image = null;

    Object.assign(this, values);
  }

  static desdeJson(json: any): Product {
    return new Product({
      id: parseInt(json.id),
      name: json.name,
      price: parseFloat(json.price),
      format: json.format,
      image: json.image,
    });
  }
}
