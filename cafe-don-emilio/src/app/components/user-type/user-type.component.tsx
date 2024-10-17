import React, { useState } from 'react';
import { UserIcon } from '../icons';
import './user-type.component.scss';
import { PriceContainer } from '../price-quantity';

interface UserTypeProps {
  type: string; // Add the 'type' prop
  description: string;
  price: number | string;
  onQuantityChange: (quantity: number) => void; // Add the 'onQuantityChange' callback
}

export const UserType: React.FC<UserTypeProps> = ({ type, description, price, onQuantityChange }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity); // Call the callback when quantity changes
  };

  const decrement = () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity); // Call the callback when quantity changes
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
      <PriceContainer price={price} increment={increment} decrement={decrement} />
    </div>
  );
};
