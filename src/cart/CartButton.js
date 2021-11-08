import { useState, useContext } from "react";
import CartContext from "../store/CartContext";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  //Calculates the number of items in the cart
  let numOfItems = 0;
  for (let i = 0; i < cartCtx.items.length; i++) {
    numOfItems += +cartCtx.items[i].amount;
  }

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  // //runs whenever number of items is changed
  // useEffect(() => {
  //   if (cartCtx.items.length === 0) {
  //     return;
  //   }
  //   setBtnIsHighlighted(true);

  //   const timer = setTimeout(() => {
  //     setBtnIsHighlighted(false);
  //   }, 300);

  //   //clean up function
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [cartCtx.items]);

  return (
    <div>
      <button className={btnClasses} onClick={props.onOpenCart}>
        <span className={classes.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </span>
        <span className={classes.badge}>{numOfItems}</span>
      </button>
    </div>
  );
};

export default CartButton;
