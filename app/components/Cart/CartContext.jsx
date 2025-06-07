"use client";

import { createContext, useContext, useReducer, useEffect } from "react";
import { usePathname } from "next/navigation";

const CartContext = createContext();

const initialState = {
  isOpen: false,
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };
    case "OPEN_CART":
      return { ...state, isOpen: true };
    case "CLOSE_CART":
      return { ...state, isOpen: false };
    case "ADD_ITEM": {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };
    case "SET_CART":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const pathname = usePathname();

  const [state, dispatch] = useReducer(cartReducer, initialState, (initial) => {
    try {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart
        ? { ...initial, items: JSON.parse(storedCart) }
        : initial;
    } catch (error) {
      console.error("Error loading cart from localStorage", error);
      return initial;
    }
  });

  useEffect(() => {
    dispatch({ type: "CLOSE_CART" });
  }, [pathname]);

  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    } catch (error) {
      console.error("Error saving cart to localStorage", error);
    }
  }, [state.items]);

  const toggleCart = () =>
    dispatch({
      type: "TOGGLE_CART",
    });

  const openCart = () =>
    dispatch({
      type: "OPEN_CART",
    });

  const closeCart = () =>
    dispatch({
      type: "CLOSE_CART",
    });

  const addItem = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const removeItem = (id) =>
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });

  const decreaseQuantity = (id) =>
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });

  const increaseQuantity = (id) =>
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });

  const clearCart = () =>
    dispatch({
      type: "CLEAR_CART",
    });

  return (
    <CartContext.Provider
      value={{
        isOpen: state.isOpen,
        items: state.items,
        toggleCart,
        openCart,
        closeCart,
        addItem,
        removeItem,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
