import Button from "../UI/Button";

import classes from "./CartAddRemoveButtons.module.css";

const CartAddRemoveButtons = (props) => {
  return (
    <div>
      <div>
        <Button onClick={props.addItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
          </svg>
        </Button>
        <span className={classes.itemAmount}>{props.itemAmount}</span>
        <Button onClick={props.removeItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
          </svg>
        </Button>
      </div>

      <div className={classes.itemPrice}>
      </div>
    </div>
  );
};

export default CartAddRemoveButtons;
