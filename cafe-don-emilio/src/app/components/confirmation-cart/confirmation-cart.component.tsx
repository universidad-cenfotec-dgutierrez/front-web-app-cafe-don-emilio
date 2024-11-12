import React, { useState, useEffect } from 'react';
import { Popup } from '../booking-popup'; 
import "./confirmation-cart.component.scss"

// Helper functions to format date and time
const formatDate = (dateString: string | undefined) => {
  if (!dateString) return "Fecha por confirmar";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Fecha por confirmar";

  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${dayOfWeek}, ${day} de ${month} del ${year}`;
};

const formatTime = (timeString: string | undefined) => {
  if (!timeString) return "Hora por confirmar";
  const [hourStr, minuteStr] = timeString.split(':');
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  if (isNaN(hour) || isNaN(minute)) return "Hora por confirmar";
  const period = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`;
};

interface ConfirmationCardProps {
  date?: string;
  hour?: string;
  tickets: { type: string; quantity: number; price: number }[];
  services: { name: string; quantity: number; price: number }[];
}

export const ConfirmationCard: React.FC<ConfirmationCardProps> = ({
  date,
  hour,
  tickets,
  services
}) => {
  const [total, setTotal] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [reservationDetails, setReservationDetails] = useState<{ date: string, time: string, price: number } | null>(null);

  useEffect(() => {
    const totalEntries = tickets.reduce(
      (sum, entry) => sum + entry.quantity * entry.price,
      0
    );
    const totalServices = services.reduce(
      (sum, service) => sum + service.quantity * service.price,
      0
    );
    setTotal(totalEntries + totalServices);
  }, [tickets, services]);

  const handleAddToCartClick = () => {
    setReservationDetails({
      date: formatDate(date),
      time: formatTime(hour),
      price: total,
    });
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleEditClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="card main-container">
      <div className="card-body">
        <h5 className="card-title">Visita: {formatDate(date)}</h5>
        <h5 className="card-text">Horario: {formatTime(hour)}</h5>
        <h6>Entradas</h6>
        {tickets.map((entry, index) => (
          <div key={index} className="d-flex justify-content-between">
            <span className='product-span'>{entry.type} x{entry.quantity}</span>
            <span className='product-span dotted-line'>${entry.quantity * entry.price}</span>
          </div>
        ))}
        <h6 className='price-element'>Servicios adicionales</h6>
        {services.map((service, index) => (
          <div key={index} className="d-flex justify-content-between">
            <span className='product-span'>{service.name} x{service.quantity}</span>
            <span className='product-span dotted-line'>${service.quantity * service.price}</span>
          </div>
        ))}
        <div className="mt-4 d-flex justify-content-end gap fs-4">
          <strong className='price-element'>Precio del tour</strong>
          <strong className='price-element'>${total}</strong>
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <button className="btn btn-outline-secondary cart-btns edit-btn" onClick={handleEditClick}>Editar selección</button>
          {/* <button className="btn btn-secondary cart-btns" onClick={handleAddToCartClick}>
            Añadir al carrito
          </button> */}
        </div>
        {/* Render Popup if showPopup is true and pass reservation details */}
        {showPopup && reservationDetails && (
          <Popup
            show={showPopup}  
            reservation={reservationDetails}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </div>
  );
};
