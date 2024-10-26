import React, { useContext, useState } from 'react';
import { MinusPlusButtons } from '../plus-minus-btns';
import { CoffeeCard } from '../coffee-product-image';
import { CartContext } from '../cart/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  format: string;
  price: number;
  image: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ id, name, format, price, image }) => {
  const cartContext = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); // Inicializa quantity a 1
  const [showAlert, setShowAlert] = useState(false); // Estado para la alerta

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (cartContext) {
      cartContext.dispatch({
        type: 'ADD_ITEM',
        payload: { id, name, price, quantity },
      });
      setQuantity(1); // Reiniciar quantity a 1 después de añadir al carrito
      setShowAlert(true); // Mostrar la alerta

      // Ocultar la alerta después de 2 segundos
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  return (
    <div className="col-6 col-sm-4 col-md-3 shop-product-container border-shadow">
      <CoffeeCard image={image} />
      <div className='product-info'>
        <div className='d-flex justify-content-between'>
          <p className='fw-500'>{name} <br /><small className='fw-light'>{format}</small></p>
          <p className='fw-500 '>{price}$</p>
        </div>
        <div className='plus-minus-container'>
          <MinusPlusButtons 
            quantity={quantity} // Pasar la cantidad actual
            increment={(newQty) => handleQuantityChange(newQty)}
            decrement={(newQty) => handleQuantityChange(newQty)}
          />
        </div>
        <div className='d-flex justify-content-center btn-container'>
          <button
            className="btn btn-md-imp btn-secondary reserve-now-btn color-light me-3 rounded-5 tour-list-btn tour-list-btn-popup add-btn d-flex justify-content-evenly"
            onClick={handleAddToCart}
          >
            <img src="/fi-ss-shopping-cart.png" alt="Añadir al carrito" />
            Añadir al carrito
          </button>
        </div>
      </div>
      {/* Alerta de confirmación */}
      {showAlert && (
        <div className="alert alert-success mt-2" role="alert">
          ¡Producto añadido al carrito!
        </div>
      )}
    </div>
  );
};
