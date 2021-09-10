import { useContext } from "react";

import CartContext from "../store/CartContext";
import Modal from "../UI/modal/Modal";
import CartAddRemoveButtons from "./CartAddRemoveButtons";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartHasItems = cartCtx.items.length > 0;
  const totalAmount = `Total: $${cartCtx.totalAmount.toFixed(2)}`;

  const displayItems = cartCtx.items.map((item) => {
    const finalPrice = item.price * item.amount;

    const onAddItemButtonHandler = () => {
      // console.log("adding item");
      cartCtx.addItem({ ...item, amount: 1 });
    };

    const onRemoveItemButtonHandler = () => {
      cartCtx.removeItem({ ...item, amount: 1 });
    };

    const displayToppings = item.selectedToppings.map((topping) => {
      if (topping.toppingPrice === 0) {
        return <li>{topping.toppingName}: Free</li>;
      } else {
        return (
          <li>
            {topping.toppingName}: ${topping.toppingPrice}
          </li>
        );
      }
    });

    return (
      <>
        <h5>
          x{item.amount} {item.name} ${finalPrice.toFixed(2)}
        </h5>
        <ul>{displayToppings}</ul>
        <CartAddRemoveButtons
          addItem={onAddItemButtonHandler}
          removeItem={onRemoveItemButtonHandler}
        />
      </>
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
