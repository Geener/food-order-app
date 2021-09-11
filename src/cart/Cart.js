import { useContext } from "react";

import CartContext from "../store/CartContext";
import Modal from "../UI/modal/Modal";
import CartAddRemoveButtons from "./CartAddRemoveButtons";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartHasItems = cartCtx.items.length > 0;
  const totalAmount = `Total: $${cartCtx.totalAmount.toFixed(2)}`;

  const displayItems = cartCtx.items.map((item) => {
    let toppingsPrice = 0;

    for (let i = 0; i < item.selectedToppings.length; i++) {
      // console.log("topping: " + item.selectedToppings[i].toppingPrice);
      toppingsPrice += item.selectedToppings[i].toppingPrice;
    }

    // console.log(toppingsPrice);

    const finalItemPrice = item.price + toppingsPrice;

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
      <div className={classes.cartItem}>
        <div>
          <h5>
            {item.name} ${item.price}
          </h5>
          <ul>{displayToppings}</ul>
        </div>
        <CartAddRemoveButtons
          addItem={onAddItemButtonHandler}
          removeItem={onRemoveItemButtonHandler}
          itemAmount={item.amount}
          itemPrice={finalItemPrice.toFixed(2)}
        />
      </div>
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
