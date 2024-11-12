import React, { useState } from 'react';
import { UserIcon } from '../icons';
import './user-type.component.scss';
import { PriceContainer } from '../price-quantity';

interface UserTypeProps {
  type: string;
  description: string;
  price: number | string;
  onQuantityChange: (quantity: number) => void; // Prop for updating quantity in parent
}

export const UserType: React.FC<UserTypeProps> = ({ type, description, price, onQuantityChange }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity); // Update the local state
    onQuantityChange(newQuantity); // Pass the new quantity to the parent
  };

  const decrement = () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= 0) { // Prevent negative quantity
      setQuantity(newQuantity);
      onQuantityChange(newQuantity); // Pass the new quantity to the parent
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center my-3 custom-border">
      <div className="d-flex align-items-top justify-content-between details-container">
        <div className="me-3 user-icon-container">
          <UserIcon />
        </div>
        <div className="fw-bold text-start type-container">
          {type}
        </div>
        <div className="text-center description-container">
          <small className='description-text'>{description}</small>
        </div>
      </div>
      <PriceContainer
        price={price}
        increment={increment}
        decrement={decrement}
        quantity={quantity}
      />
    </div>
  );
};
