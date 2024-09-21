import React from 'react';


interface CoffeeProductProps {
    title: string;
    description: string;
    weight: string;
    price: number;
    imgSrc: string;
}

export const CoffeeProduct: React.FC<CoffeeProductProps> = ({ title, description, weight, price, imgSrc }) => {
    return (
        <div className="coffee-product">
            <img src={imgSrc} alt={title} className="coffee-img" />
            <div className="coffee-details">
                <h5>{title}</h5>
                <p>{description}</p>
                <p>{weight}</p>
                <p className="coffee-price">${price}</p>
                <button className="btn btn-md-imp btn-secondary reserve-now-btn color-light me-3 rounded-5 tour-list-btn">
                    <img src="/fi-ss-shopping-cart.png" alt="Añadir al carrito" />
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
};


