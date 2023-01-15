import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initial = {
  cart: [],
  count: 0,
};


const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, action.payload],
        count: state.count + 1,
      };
    }
    case "DELETE_FROM_CART": {
      return {
        ...state,
        cart: action.payload,
        count: state.count - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initial);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
