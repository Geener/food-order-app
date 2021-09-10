import { useContext, useRef } from "react";

import CartContext from "./../../store/CartContext";
import AddToCartButton from "../../english/orderPage/AddToCartButton";

const ItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const amountInputRef = useRef();
  let newID = "";

  const newIDCreator = () => {
    const toppingNames = [];

    //adds toppings names to new array
    for (let i = 0; i < props.toppingsArray.length; i++) {
      toppingNames.push(props.toppingsArray[i].toppingName);
    }

    //loop through sorted topping names array and add each topping to a string
    let toppingString = "";
    for (let i = 0; i < toppingNames.length; i++) {
      toppingString += toppingNames.sort()[i];
    }

    //newID is food name + all toppings selected
    newID = props.selectedFood.name + toppingString;
    console.log("New ID: " + newID);
  };

  const addToCartHandler = () => {
    const enteredAmount = amountInputRef.current.value;

    newIDCreator();

    cartCtx.addItem({
      name: props.selectedFood.name,
      amount: enteredAmount,
      price: props.selectedFood.price,
      description: props.selectedFood.description,
      picture: props.selectedFood.picture,
      selectedToppings: props.toppingsArray,
      id: newID,
    });

    //resets current selectedCurrent to null
    props.onSelectCurrentFood({
      name: null,
      description: null,
      picture: null,
      toppings: null,
      id: null,
    });
  };

  return (
    <>
      <input
        ref={amountInputRef}
        label="Amount"
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      ></input>
      <AddToCartButton onClick={addToCartHandler} />
    </>
  );
};

export default ItemForm;
