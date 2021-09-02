import { useContext } from "react";

import CartContext from "../store/CartContext";
import Modal from "../UI/modal/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartHasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const displayItems = cartCtx.items.map((item) => {
    return (
      <h5>
        {item.name} ${item.price}
      </h5>
    );
  });

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {!cartHasItems && <h1>Your Cart is Empty</h1>}
      {cartHasItems && displayItems}
      {cartHasItems && totalAmount}
    </Modal>
  );
};

export default Cart;
