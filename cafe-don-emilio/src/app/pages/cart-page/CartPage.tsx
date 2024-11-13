import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderComponent, FooterComponent } from "../../components";
import "./CartPage.scss";
import { OrderService } from "../../services/order-service/order.service";
import { UserOrder } from "../../models/order";
import { CartContext } from "../../components/cart/CartContext";

const CartPage: React.FC = () => {
  const context = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  if (!context) {
    return <p>Error: Contexto del carrito no disponible.</p>;
  }

  const { state, dispatch } = context;
  const cartItems = state.items;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    const userOrder = new UserOrder({
      correoUsuario: email,
      listaProductos: cartItems.flatMap((item) =>
        Array.from({ length: item.quantity }, () => ({
          name: item.name,
          price: item.price,
          format: item.format || "",
          image: item.image || "",
        }))
      ),
    });

    try {
      await OrderService.postUserOrder(userOrder);
      setSuccessMessage("Envío de correo exitoso.");
      setEmail("");
      dispatch({ type: "CLEAR_CART" });
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error al enviar el pedido:", error);
      setErrorMessage(
        "Hubo un problema al enviar el pedido. Inténtalo de nuevo."
      ); // Establecer mensaje de error
      setTimeout(() => {
        setErrorMessage("");
      }, 5000); // Limpiar el mensaje de error después de 5 segundos
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <HeaderComponent />
      <div className="cart-container">
        <h2>Carrito de Compras</h2>
        {cartItems.length > 0 ? (
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li
                key={`${item.id}-${item.format}`}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="cart-item-info d-flex">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  )}
                  <div className="cart-item-details ms-3">
                    <div>
                      {item.name} - ${item.price.toFixed(2)} x
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => {
                          const quantity = parseInt(e.target.value);
                          if (quantity > 0) {
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              payload: {
                                id: item.id,
                                format: item.format,
                                quantity,
                              },
                            });
                          }
                        }}
                        className={`quantity-input ${
                          item.quantity <= 0 ? "is-invalid" : ""
                        }`}
                      />
                    </div>
                    {item.format && (
                      <p className="product-format">Formato: {item.format}</p>
                    )}
                  </div>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_ITEM",
                      payload: { id: item.id, format: item.format },
                    })
                  }
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay productos en el carrito.</p>
        )}

        {cartItems.length > 0 && (
          <h4 className="total-price">Total: ${total.toFixed(2)}</h4>
        )}

        <form onSubmit={handleSubmit} className="email-form mb-4">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Ingresa tu correo electrónico
            </label>
            <input
              type="email"
              className={`form-control ${emailError ? "is-invalid" : ""}`}
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <div className="invalid-feedback">{emailError}</div>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>

        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}

        {/* Mostrar el mensaje de error si existe */}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

        <Link to="/" className="btn btn-secondary mt-3">
          Continuar Comprando
        </Link>
      </div>
      <FooterComponent />
    </>
  );
};

export default CartPage;
