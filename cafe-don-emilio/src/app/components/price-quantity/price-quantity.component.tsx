import React from 'react';
import { MinusPlusButtons } from '../plus-minus-btns';
import './price-quantity.component.scss';

interface PriceContainerProps {
  price: number | string;
  increment: () => void;
  decrement: () => void;
  quantity: number; // Asegúrate de que quantity sea una propiedad
}

export const PriceContainer: React.FC<PriceContainerProps> = ({ price, increment, decrement, quantity }) => {
  return (
    <div className="d-flex flex-row align-items-center main-price-container">
      <div className="d-flex flex-column price-container">
        <span className="fixed-width">Precio</span>
        <span className="me-2 fs-2 fixed-width">
          {price === 0 ? 'Gratis' : `$${price}`}
        </span>
      </div>
      <MinusPlusButtons increment={increment} decrement={decrement} quantity={quantity} />
    </div>
  );
};
