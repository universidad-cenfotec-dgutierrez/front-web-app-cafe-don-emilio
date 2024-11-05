import React, { useState, useEffect } from 'react';
import "./coffee-product-image.component.scss";

interface CoffeeCardProps {
    image: string; 
  }

let counter = 0; 

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ image }) => {
    const [backgroundClass, setBackgroundClass] = useState<string>('primary-coffe');

  useEffect(() => {

    counter++;

    if (counter % 2 === 0) {
      setBackgroundClass('primary-coffee');
    } else {
      setBackgroundClass('secondary-coffee');
    }
  }, []);

  return (
<div className={`container ${backgroundClass} coffee-container d-flex justify-content-center align-items-center p-3 w-80`}>
        <img src={image} className="card-img-top" alt="Café" />
    </div>
  );
};

