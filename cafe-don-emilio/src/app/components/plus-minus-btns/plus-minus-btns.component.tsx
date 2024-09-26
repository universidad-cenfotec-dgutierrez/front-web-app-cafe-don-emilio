import React, { useState } from 'react';
import './plus-minus-btns.component.scss';

interface MinusPlusButtonsProps {
  initialQuantity?: number; // Optional prop for initial quantity
  increment?: (newQuantity: number) => void; // Increment function that passes the new quantity
  decrement?: (newQuantity: number) => void; // Decrement function that passes the new quantity
}

export const MinusPlusButtons: React.FC<MinusPlusButtonsProps> = ({
  initialQuantity = 0, 
  increment,
  decrement,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  // Function to handle increment
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (increment) {
      increment(newQuantity); // Call parent increment function if provided
    }
  };

  // Function to handle decrement (prevent negative quantity)
  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (decrement) {
        decrement(newQuantity); // Call parent decrement function if provided
      }
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <button className="btn btn-outline-secondary minus-plus-btn" onClick={handleDecrement}>
        <img src="/minus-btn.png" alt="minus" />
      </button>
      <span className="mx-2 fs-2">{quantity}</span> {/* Display the current quantity */}
      <button className="btn btn-outline-secondary minus-plus-btn" onClick={handleIncrement}>
        <img src="/plus-btn.png" alt="plus" />
      </button>
    </div>
  );
};
