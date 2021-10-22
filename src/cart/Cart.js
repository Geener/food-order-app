import { useContext } from "react";

import CartContext from "../store/CartContext";
import Modal from "../UI/modal/Modal";
import CartAddRemoveButtons from "./CartAddRemoveButtons";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartHasItems = cartCtx.items.length > 0;
  const totalAmount = <h3 className={classes.totalPrice}>Total: ${cartCtx.totalAmount.toFixed(2)}</h3>;

  const displayItems = cartCtx.items.map((item) => {
    console.log(item)
    

    let toppingsPrice = 0;

    for (let i = 0; i < item.selectedToppings.length; i++) {
      toppingsPrice += item.selectedToppings[i].toppingPrice;
    }

    const onAddItemButtonHandler = () => {
      cartCtx.addItem({ ...item, amount: 1 });
    };

    const onRemoveItemButtonHandler = () => {
      cartCtx.removeItem({ ...item, amount: 1 });
    };

    const displayToppings = item.selectedToppings.map((topping) => {
      if (topping.toppingPrice === 0) {
        return <li>{topping.toppingName}</li>;
      } else {
        return (
          <li>
            {topping.toppingName}: +${topping.toppingPrice}
          </li>
        );
      }
    });

    let displaySize = ""

    if (item.selectedSize.length > 0) {
      displaySize = item.selectedSize.map((size) => {
        if (size.sizePrice === 0) {
          return <h6>{size.sizeName}</h6>;
        } else {
          return (
            <h6>
              {size.sizeName}: +${size.sizePrice}
            </h6>
          );
        }
      
    }) }

    

    return (
      <div className={classes.cartItem}>
        <div>
          <h5>
            {item.name} ${item.price}
          </h5>
          <h6>{displaySize}</h6>
          <ul>{displayToppings}</ul>
        </div>
        <CartAddRemoveButtons
          addItem={onAddItemButtonHandler}
          removeItem={onRemoveItemButtonHandler}
          itemAmount={item.amount}
        />
      </div>
    );
  });

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {!cartHasItems && <h1 className={classes.noItems}>Your Cart is Empty</h1>}
      {cartHasItems && displayItems}
      {cartHasItems && totalAmount}
    </Modal>
  );
};

export default Cart;
