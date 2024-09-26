import React from 'react';
import { CoffeeProduct } from '../coffee-product-props';
import "./booking-popup.component.scss";

interface PopupProps {
  reservation: {
    date: string;
    time: string;
    price: number;
  };
  onClose: () => void;
  show: boolean;
}

export const Popup: React.FC<PopupProps> = ({ reservation, onClose, show }) => {
  return (
    <div className={`modal fade ${show ? 'show' : ''}`} tabIndex={-1} style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog modal-xl modal-dialog-centered align-modal-center "> {/* modal-xl para casi pantalla completa */}
        <div className="modal-content no-padding side-padding">
          <div className="modal-header top-container no-border">
            <div className='btn-close-container d-flex '>
            <button type="button" className="btn-close custom-btn-close" onClick={onClose}></button>
            </div>
            <div className='d-flex first-box-container'>
              <div className='confirmation d-flex align-items-center text-center '>
              <img
              src="fi-ss-shopping-cart-check.png"
              alt="Carrito de compras"
              className="cart-icon img-fluid"
            />
            <h5 className="modal-title mt-3">Tu reserva al Tour de Café ha sido <br /> añadida exitosamente a tu carrito.</h5>
              </div>
            <div className="reservation-details d-flex flex-column left-border-custom">
              <h5>Reservación Tour de Café</h5>
              <p className='fs-6'>{reservation.date}</p>
              <div className='d-flex'>
              <p className='product-span fs-6'>{`Horario: ${reservation.time}`}</p>
              <p className='dotted-line'>{`$${reservation.price}`}</p>
              </div>
              <button className="btn btn-secondary proceed-btn align-modal-center ">Proceder al pago</button>
            </div>
            </div>
          </div>
          <div className="modal-body">
          <hr />
            <div className='d-flex flex-column align-items-center text-center width-100 base-padding'>
            <h2>¿Te gustaría comprar café?</h2>
            <div className="coffee-products d-flex base-padding justify-space-evenly">
              <CoffeeProduct
                title="Café molido"
                description="Tueste medio"
                weight="400 g"
                price={12}
                imgSrc="/bolsa_enteroazul 1.png"
              />
              <CoffeeProduct
                title="Café en grano"
                description="Tueste oscuro"
                weight="1000 g"
                price={12}
                imgSrc="/bolsa_enteroazul 1.png"
              />
            </div>
            <button className="btn btn-secondary mt-3">Visitar nuestra tienda</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
