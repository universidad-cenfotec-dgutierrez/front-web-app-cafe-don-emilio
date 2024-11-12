import React, { createContext, useReducer, ReactNode } from 'react';

// Definimos la estructura de un producto en el carrito
interface CartItem {
  id: string;
  name: string;
  price: number;
  format: string;
  image: string;
  quantity: number;
}

// Definimos la estructura del estado global del carrito
interface CartState {
  items: CartItem[];
}

// Definimos la estructura del contexto
interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<any>;
}

// Estado inicial del carrito (vacío)
const initialState: CartState = {
  items: [],
};

// Reducer para manejar las acciones del carrito
const cartReducer = (state: CartState, action: any): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.format === action.payload.format
      );
      if (existingItemIndex !== -1) {
        // Si el producto ya existe en el carrito, sumamos la cantidad
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      } else {
        // Si no existe, lo agregamos al carrito
        return { ...state, items: [...state.items, action.payload] };
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id || item.format !== action.payload.format),
      };

    case 'UPDATE_QUANTITY':
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id && item.format === action.payload.format);
      if (itemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[itemIndex].quantity = action.payload.quantity;
        return { ...state, items: updatedItems };
      }
      return state;

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
};

// Creamos el contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Propiedades del proveedor de contexto
interface CartProviderProps {
  children: ReactNode;
}

// Componente proveedor de contexto para el carrito
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
