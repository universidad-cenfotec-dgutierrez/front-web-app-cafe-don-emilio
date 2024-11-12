import axios from "axios";
import { Constants } from "../../common/constants/constants";
import { Reservation } from "../../models/reservation.model";

export class ReservationService {
    static reservationInstance = null;

    static getInstance() {
        if (ReservationService.reservationInstance === null) {
            ReservationService.reservationInstance = new ReservationService();
        }
        return ReservationService.reservationInstance;
    }

    /**
     * Envía una reserva de usuario a la API
     * @param {Reservation} reservation - La reserva que se enviará
     * @returns {Promise<void>} Promesa que se resuelve cuando la solicitud es exitosa
     */
    async postReservation(reservation: Reservation): Promise<void> {
        if (Constants.modoOffline) {
            console.log("Modo offline activado. Reserva no enviada:", reservation);
        } else {
            try {
                const response = await axios.post(
                    `${Constants.fullUrlParcial}${Constants.reservationOrder}`,
                    reservation
                );
                console.log("Reserva enviada con éxito:", response.data);
            } catch (error) {
                console.error(
                    "Error al enviar la reserva:",
                    error.response ? error.response.data : error.message
                );
                throw error;
            }
        }
    }
}
