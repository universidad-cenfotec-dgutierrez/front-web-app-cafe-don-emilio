// services/order-service/order.service.ts
import axios from "axios";
import { Constants } from "../../common/constants/constants";
import { UserOrder } from "../../models/order";

/**
 * Servicio para realizar la solicitud POST y enviar el pedido del usuario a la API
 */
export class OrderService {
  static orderInstance = null;

  static getInstance() {
    if (OrderService.orderInstance === null) {
      OrderService.orderInstance = new OrderService();
    }
    return OrderService.orderInstance;
  }

  /**
   * Envía un pedido de usuario a la API
   * @param {UserOrder} order - El pedido que se enviará
   * @returns {Promise<void>} Promesa que se resuelve cuando la solicitud es exitosa
   */
  static async postUserOrder(order: UserOrder): Promise<void> {
    if (Constants.modoOffline) {
      console.log("Modo offline activado. Pedido no enviado:", order);
    } else {
      try {
        const response = await axios.post(
          `${Constants.fullUrlParcial}${Constants.orderPurchase}`,
          order
        );
        console.log("Pedido enviado con éxito:", response.data);
      } catch (error) {
        console.error("Error al enviar el pedido:", error.response ? error.response.data : error.message);
        throw error;
      }
    }
  }
}
