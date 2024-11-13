export interface ReservationState {
    selectedDate: string | null;
    selectedTime: string | null;
    tickets: { type: string; quantity: number; price: number }[];
    services: { name: string; quantity: number; price: number }[];
  }
  
  export type ReservationAction =
    | { type: 'SET_DATE'; payload: string }
    | { type: 'SET_TIME'; payload: string }
    | { type: 'UPDATE_TICKETS'; payload: { type: string; quantity: number; price: number } }
    | { type: 'UPDATE_SERVICES'; payload: { name: string; quantity: number; price: number } };
  
  export const reservationReducer = (state: ReservationState, action: ReservationAction): ReservationState => {
    switch (action.type) {
      case 'SET_DATE':
        return { ...state, selectedDate: action.payload };
      case 'SET_TIME':
        return { ...state, selectedTime: action.payload };
      case 'UPDATE_TICKETS':
        return {
          ...state,
          tickets: state.tickets
            .filter(ticket => ticket.type !== action.payload.type)
            .concat(action.payload.quantity > 0 ? [action.payload] : []),
        };
      case 'UPDATE_SERVICES':
        return {
          ...state,
          services: state.services
            .filter(service => service.name !== action.payload.name)
            .concat(action.payload.quantity > 0 ? [action.payload] : []),
        };
      default:
        return state;
    }
  };
  