import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { ReservationAction, reservationReducer, ReservationState } from './reservationReducer';

// Estado inicial
const initialState: ReservationState = {
  selectedDate: null,
  selectedTime: null,
  tickets: [],
  services: [],
};

// Crear contexto
const ReservationContext = createContext<{
  state: ReservationState;
  dispatch: React.Dispatch<ReservationAction>;
} | undefined>(undefined);

export const ReservationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reservationReducer, initialState);
  return (
    <ReservationContext.Provider value={{ state, dispatch }}>
      {children}
    </ReservationContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useReservationContext = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservationContext must be used within a ReservationProvider');
  }
  return context;
};
