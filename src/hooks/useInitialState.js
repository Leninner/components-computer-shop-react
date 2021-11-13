import { useState } from 'react';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({ ...state, cart: [...state.cart, payload] });
  };

  const removeFromCart = (payload) => {
    setState({ ...state, cart: state.cart.filter((item) => item.id !== payload.id) });
  };

  const [toggleOrders, setToggleOrders] = useState(false);

  const toggleOrdersHandler = () => {
    setToggleOrders(!toggleOrders);
  };

  return { state, addToCart, removeFromCart, toggleOrders, toggleOrdersHandler };
};

export { useInitialState };
