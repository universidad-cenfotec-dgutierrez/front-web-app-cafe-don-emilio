import React from 'react';
import './plus-minus-btns.component.scss';

interface MinusPlusButtonsProps {
  quantity: number;
  increment?: (newQuantity: number) => void; // Increment function that passes the new quantity
  decrement?: (newQuantity: number) => void; // Decrement function that passes the new quantity
}

export const MinusPlusButtons: React.FC<MinusPlusButtonsProps> = ({
  quantity, 
  increment,
  decrement,
}) => {
  const handleIncrement = () => {
    if (increment) {
      increment(quantity + 1); // Pass the new quantity when incrementing
    }
  };

  const handleDecrement = () => {
    if (decrement && quantity > 0) { // Prevent decrement if quantity is 0
      decrement(quantity - 1); // Pass the new quantity when decrementing
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <button 
        className="btn btn-outline-secondary minus-plus-btn" 
        onClick={handleDecrement}
      >
        <img src="/minus-btn.png" alt="minus" />
      </button>
      <span className="mx-2 fs-2">{quantity}</span> {/* Display the current quantity */}
      <button 
        className="btn btn-outline-secondary minus-plus-btn" 
        onClick={handleIncrement}
      >
        <img src="/plus-btn.png" alt="plus" />
      </button>
    </div>
  );
};
