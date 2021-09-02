import { useReducer } from "react";
import CartContext from "./CartContext";

const emptyCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;

    const updatedTotalAmount = state.totalAmount + action.item.price;
    updatedItems = state.items.concat(action.item);

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "REMOVE") {
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartActions] = useReducer(cartReducer, emptyCart);

  const addItemToCartHandler = (item) => {
    dispatchCartActions({ type: "ADD", item: item });
  };

  // const removeItemFromCartHandler = (item) => {
  //   dispatchCartActions({ type: "REMOVE", item: item });
  // };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    // removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
