import React, { useState } from "react";
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
import { ReservationService } from "../../services/reservation-service/reservation.service";
import { Reservation } from "../../models/reservation.model";
import "./reservation.scss";

// Función para validar el correo electrónico
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const ReservationPage: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [ticket, setTicket] = useState<
        { tipo: string; descripcion: string; precio: number; cantidad: number }[]
    >([]); // Cambiado a array
    const [services, setServices] = useState<{ nombre: string; descripcion: string; precio: number; cantidad: number }[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");

    const isStepComplete = selectedDate && selectedTime && ticket.some(t => t.cantidad > 0); // Asegurarse de que al menos un ticket tenga cantidad > 0

    // Función para actualizar las entradas
    const handleTicketChange = (tipo: string, descripcion: string, cantidad: number, precio: number) => {
        setTicket((prevTicket) => {
            // Buscar si la entrada ya existe
            const updatedTickets = prevTicket.map((entry) => {
                if (entry.tipo === tipo) {
                    return { ...entry, cantidad }; // Solo actualizar la cantidad
                }
                return entry;
            });

            // Si la entrada no existe, agregarla a la lista
            if (!updatedTickets.some((entry) => entry.tipo === tipo) && cantidad > 0) {
                updatedTickets.push({ tipo, descripcion, cantidad, precio });
            }

            return updatedTickets; // Retornar el estado actualizado
        });
    };

    // Función para actualizar los servicios
    function updateServices(nombre: string, descripcion: string, cantidad: number, precio: number) {
        const updatedServices = services.filter(service => service.nombre !== nombre);
        if (cantidad > 0) {
            updatedServices.push({ nombre, descripcion, cantidad, precio });
        }
        return updatedServices;
    }

    const handleConfirmReservation = async () => {
        // Asegurarnos de que todas las propiedades estén definidas y no sean inválidas
        if (!selectedDate || !selectedTime || !ticket.some(t => t.cantidad > 0) || !email) {
            alert("Por favor complete todos los campos antes de confirmar la reserva.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor ingrese un correo electrónico válido.");
            return;
        }

        const reservation: Reservation = {
            fecha: new Date().toISOString(),
            idioma: "es",
            correoUsuario: email,
            tour: {
                nombre: "Tour Café Don Emilio",
                hora: selectedTime!,
                duracionHoras: 1,
                guia: "Guía de tour asignado"
            },
            entradas: ticket,  // Usamos el array de entradas
            servicios: services.map(service => ({
                nombre: service.nombre,
                descripcion: service.descripcion,
                precio: service.precio,
                cantidad: service.cantidad
            }))
        };

        try {
            await ReservationService.getInstance().postReservation(reservation);
            alert("Reserva confirmada y enviada exitosamente.");

            // Resetear campos después de una reserva exitosa
            setEmail("");
            setSelectedDate(null);
            setSelectedTime(null);
            setTicket([]); // Resetear entradas
            setServices([]);
            setShowModal(false);
        } catch (error) {
            console.error("Error al enviar la reserva:", error);
            alert("Hubo un error al enviar la reserva. Intente nuevamente.");
        }
    };

    return (
        <>
            <HeaderComponent />
            <div className="container pt-5">
                <div className="text-center py-5 my-2 title-distance">
                    <LineComponent />
                    <h1 className="fw-bold title-1 fs-4">Reservar</h1>
                </div>
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
                <UserType
                    type="Adultos"
                    description="Personas mayores de 18 años"
                    price={40}
                    onQuantityChange={(quantity: number) => {
                        handleTicketChange("Adultos", "Personas mayores de 18 años", quantity, 40);
                    }}
                />
                <UserType
                    type="Niños y Jóvenes"
                    description="Personas entre 10 y 18 años"
                    price={30}
                    onQuantityChange={(quantity: number) => {
                        handleTicketChange("Niños y Jóvenes", "Personas entre 10 y 18 años", quantity, 30);
                    }}
                />
                <UserType
                    type="Bebés y Niños Pequeños"
                    description="Personas menores de 10 años"
                    price={0}
                    onQuantityChange={(quantity: number) => {
                        handleTicketChange("Bebés y Niños Pequeños", "Personas menores de 10 años", quantity, 0);
                    }}
                />
            </div>

            <div className="container pt-5">
                <NumberedTitleComponent
                    number={3}
                    text="¿Te gustaría añadir alguno de los siguientes servicios?"
                />
                <div className="d-flex align-items-center justify-content-center food-cart-container">
                    <FoodCard
                        title="Almuerzo típico costarricense"
                        description="Incluye una proteína, dos guarniciones, ensalada y una bebida."
                        price={20}
                        image="/Almuerzo1.png"
                        onQuantityChange={(quantity: number) => {
                            setServices(prev => updateServices("Almuerzo típico costarricense", "Incluye una proteína, dos guarniciones, ensalada y una bebida.", quantity, 20));
                        }}
                    />
                    <FoodCard
                        title="Almuerzo vegetariano costarricense"
                        description="Incluye una proteína vegetariana, dos guarniciones, ensalada y una bebida."
                        price={20}
                        image="/AlmuerzoVegetariano.png"
                        onQuantityChange={(quantity: number) => {
                            setServices(prev => updateServices("Almuerzo vegetariano costarricense", "Incluye una proteína vegetariana, dos guarniciones, ensalada y una bebida.", quantity, 20));
                        }}
                    />
                </div>
            </div>

            <div className="container pt-5">
                {isStepComplete && (
                    <NumberedTitleComponent
                        number={4}
                        text="Confirme su selección"
                    />
                )}
            </div>

            {isStepComplete && (
                <div className="container pt-5">
                    <ConfirmationCard
                        date={selectedDate!}
                        hour={selectedTime!}
                        tickets={ticket.map((t) => ({
                            type: t.tipo,
                            quantity: t.cantidad,
                            price: t.precio
                        }))}
                        services={services.map(service => ({
                            name: service.nombre,
                            quantity: service.cantidad,
                            price: service.precio
                        }))}
                    />
                    <div className="reserve-btn-container mt-5">
                        <button className="btn btn-primary mt-4" onClick={() => setShowModal(true)}>
                            Confirmar y Enviar Reserva
                        </button>
                    </div>
                </div>
            )}


            {showModal && (
                <div className="modal show d-block" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirme su correo</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Ingrese su correo"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                    Cancelar
                                </button>
                                <button type="button" className="btn btn-primary" onClick={handleConfirmReservation}>
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <FooterComponent />
        </>
    );
};
