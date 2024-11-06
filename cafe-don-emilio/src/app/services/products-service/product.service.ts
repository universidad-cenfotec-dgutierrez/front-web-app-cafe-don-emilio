import axios from "axios";
import { Constants } from "../../common/constants/constants";
import { Product } from "../../models/product";

/**
 * Service for make the request to the API Products
 * @author dgutierrez
 */
export class ProductService {
  static productIntance = null;

  static getInstance() {
    if (ProductService.productIntance === null) {
      ProductService.productIntance = new ProductService();
    }
    return ProductService.productIntance;
  }

  /**
   * Get all the products from the API
   * @returns {Promise<Product[]>} Promise with the list of products
   * @author dgutierrez
   */
  static async getAllProducts(): Promise<Product[]> {
    if (Constants.modoOffline) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            new Product({
              id: 1,
              name: "Café Don Emilio",
              price: 1.5,
              format: "250",
              image: "/public/bolsa_enteroazul 1.png",
            }),
            new Product({
              id: 2,
              name: "Café Don Emilio",
              price: 1.5,
              format: "250",
              image: "/public/bolsa_enteroazul 1.png",
            }),
            new Product({
              id: 3,
              name: "Café Don Emilio",
              price: 1.5,
              format: "250",
              image: "/public/bolsa_enteroazul 1.png",
            }),
            new Product({
              id: 4,
              name: "Café Don Emilio",
              price: 1.5,
              format: "250",
              image: "/public/bolsa_enteroazul 1.png",
            }),
          ]);
        }, 1000);
      });
    } else {
      const { data } = await axios.get(
        `${Constants.appHost}${Constants.apiBaseUrl}${Constants.getAllProducts}`
      );
      return data.map(Product.desdeJson);
    }
  }
}
