import React, { useState } from 'react';
import { 
    FoodCard, 
    FooterComponent, 
    HeaderComponent, 
    LineComponent, 
    NumberedTitleComponent, 
    TourList, 
    TourScheduler, 
    UserType, 
    ConfirmationCard 
} from "../../components";

import "./reservation.scss";


/**
 * BookingPage by
 * @author Shanty
 */

export const ReservationPage: React.FC = () => {
    // State variables to store user selections
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [tickets, setTickets] = useState<{ type: string; quantity: number; price: number }[]>([]);
    const [services, setServices] = useState<{ name: string; quantity: number; price: number }[]>([]);

    // Logic to check if step 1 and 2 are complete
    const isStepComplete = selectedDate && selectedTime && tickets.length > 0;

    // Helper function to update the tickets
    function updateTickets(type: string, quantity: number, price: number) {
        const updatedTickets = tickets.filter(ticket => ticket.type !== type);
        if (quantity > 0) {
            updatedTickets.push({ type, quantity, price });
        }
        return updatedTickets;
    }

    // Helper function to update the services
    function updateServices(name: string, quantity: number, price: number) {
        const updatedServices = services.filter(service => service.name !== name);
        if (quantity > 0) {
            updatedServices.push({ name, quantity, price });
        }
        return updatedServices;
    }

    return (
        <>
            <HeaderComponent />

            <div className="container pt-5">
                {/* Title */}
                <div className="text-center py-5 my-2 title-distance"> 
                    <LineComponent />
                    <h1 className="fw-bold title-1 fs-4">Reservar</h1>
                </div>

                {/* Availability question */}
                <NumberedTitleComponent
                    number={1}
                    text="¿Cuándo le gustaría visitar Café Don Emilio?"
                />
                <TourScheduler
                    onDateSelect={setSelectedDate}
                    onTimeSelect={setSelectedTime}
                />
                <TourList
                    selectedDate={selectedDate}
                    onTimeSelect={setSelectedTime}
                />
            </div>

            <div className="container pt-5">
                <NumberedTitleComponent
                    number={2}
                    text="¿Cuántas entradas te gustaría comprar?"
                />
                <div>
                    <UserType
                        type="Adultos"
                        description="Personas mayores de 18 años"
                        price={40}
                        onQuantityChange={(quantity: number) => {
                            setTickets(prev => updateTickets('Adultos', quantity, 40));
                        }}
                    />
                    <UserType
                        type="Niños y Jóvenes"
                        description="Personas entre 10 y 18 años"
                        price={30}
                        onQuantityChange={(quantity: number) => {
                            setTickets(prev => updateTickets('Niños y Jóvenes', quantity, 30));
                        }}
                    />
                    <UserType
                        type="Bebés y Niños Pequeños"
                        description="Personas menores de 10 años"
                        price={0}
                        onQuantityChange={(quantity: number) => {
                            setTickets(prev => updateTickets('Bebés y Niños Pequeños', quantity, 0));
                        }}
                    />
                </div>
            </div>

            <div className="container pt-5">
                <NumberedTitleComponent
                    number={3}
                    text="¿Te gustaría añadir alguno de los siguientes servicios?"
                />
                <div className="d-flex aling-items-center justify-content-center food-cart-container">
                    <FoodCard
                        title="Almuerzo típico costarricense"
                        description="Incluye una proteína, dos guarniciones, ensalada y una bebida."
                        price={20}
                        image="/Almuerzo1.png"
                        onQuantityChange={(quantity: number) => {
                            setServices(prev => updateServices('Almuerzo típico costarricense', quantity, 20));
                        }}
                    />
                    <FoodCard
                        title="Almuerzo vegetariano costarricense"
                        description="Incluye una proteína vegetariana, dos guarniciones, ensalada y una bebida."
                        price={20}
                        image="/AlmuerzoVegetariano.png"
                        onQuantityChange={(quantity: number) => {
                            setServices(prev => updateServices('Almuerzo típico vegetariano', quantity, 20));
                        }}
                    />
                </div>
            </div>

            <div className="container pt-5">
                {/* Conditionally render the title */}
                {isStepComplete && (
                    <NumberedTitleComponent
                        number={4}
                        text="Confirme su selección"
                    />
                )}
            </div>

            {/* Conditionally render the confirmation card */}
            {isStepComplete && (
                <div className="container pt-5">
                    <ConfirmationCard
                        date={selectedDate!}
                        hour={selectedTime!}
                        tickets={tickets}
                        services={services}
                    />
                </div>
                
            )}

            <div className='container pt-5'></div>
            <div className='container pt-5'></div>

            <FooterComponent />
        </>
    );
};
