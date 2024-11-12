import React, { useState } from 'react';
import './food-cart.component.scss';
import { PriceContainer } from '../price-quantity';

interface FoodCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  onQuantityChange: (quantity: number) => void; // Prop for updating quantity in parent
}

export const FoodCard: React.FC<FoodCardProps> = ({ title, description, price, image, onQuantityChange }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity); // Update the local state
    onQuantityChange(newQuantity); // Pass the new quantity to the parent
  };

  const decrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity); // Pass the new quantity to the parent
    }
  };

  return (
    <div className="card food-cart d-flex flex-column align-items-center">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column g-3">
        <h5 className="card-title text-start">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between food-cart-component">
          <PriceContainer price={price} increment={increment} decrement={decrement} quantity={quantity} />
        </div>
      </div>
    </div>
  );
};
