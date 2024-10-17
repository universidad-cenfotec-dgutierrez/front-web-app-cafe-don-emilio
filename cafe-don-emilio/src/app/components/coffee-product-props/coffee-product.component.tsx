import React from 'react';
import { CoffeeCard } from '../coffee-product-image';
import "./coffee-product.component.scss";


interface CoffeeProductProps {
    title: string;
    description: string;
    weight: string;
    price: number;
    imgSrc: string;
}

export const CoffeeProduct: React.FC<CoffeeProductProps> = ({ title, description, weight, price, imgSrc }) => {
    return (
        <div className="coffee-product d-flex grey-border ">
            <CoffeeCard image={(imgSrc)}></CoffeeCard>
            <div className="coffee-details d-flex flex-column justify-content-center">
                <div className='d-flex justify-content-evenly'>
                <div>
                <h5>{title}</h5>
                <p>{description}</p>
                <p>{weight}</p>
                </div>
                <div>
                <small>Precio</small>
                <p className="coffee-price">${price}</p>
                </div>
                </div>
                <div>
                <button className="btn btn-md-imp btn-secondary reserve-now-btn color-light d-flex me-3 rounded-5 tour-list-btn tour-list-btn-popup">
                    <img src="/fi-ss-shopping-cart.png" alt="Añadir al carrito" className='margin' />
                    Añadir al carrito
                </button>
                </div>
            </div>
        </div>
    );
};


