import { useReducer } from "react";
import CartContext from "./CartContext";

const emptyCart = {
  items: [],
  totalAmount: 0,
};

//check if item with same ID is already in cart
/// if item is found return the index, otherwise return -1
const idChecker = (stateArray, newItemID) => {
  if (stateArray.length === 0) {
    return -1;
  }

  for (let i = 0; i < stateArray.length; i++) {
    if (stateArray[i].id === newItemID) {
      return i;
    }
  }

  return -1;
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    let itemToppingPrice = 0;

    //if there are no items in cart just add item
    if (idChecker(state.items, action.item.id) === -1) {
      updatedItems = state.items.concat(action.item);
    } else {
      let updatedItem = {
        ...action.item,
        amount:
          +action.item.amount +
          +state.items[idChecker(state.items, action.item.id)].amount,
      };

      updatedItems = [...state.items];
      updatedItems[idChecker(state.items, action.item.id)] = updatedItem;
    }

    const toppingArray = action.item.selectedToppings;
    let sizePrice = 0;
    if (action.item.selectedSize.length > 0) {
      sizePrice = action.item.selectedSize[0].sizePrice
      // console.log("sizePrice: " + sizePrice)
    }

    //Adds the price of selected toppings
    for (let i = 0; i < toppingArray.length; i++) {
      itemToppingPrice += Number(toppingArray[i].toppingPrice);
    }

    const finalPrice =
      action.item.amount * (action.item.price + itemToppingPrice + sizePrice);

     console.log("finalPrice: " + finalPrice); 

    let updatedTotalAmount = state.totalAmount + finalPrice;

    updatedTotalAmount.toFixed(2);

    // console.log("updatedTotalAmount: " + updatedTotalAmount.toFixed(2));

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "REMOVE") {
    let updatedItems = [...state.items];

    let sizePrice = 0;
    if (action.item.selectedSize.length > 0) {
      sizePrice = action.item.selectedSize[0].sizePrice
    }

    let itemToppingPrice = 0;
    const toppingArray = action.item.selectedToppings;
    //Adds the price of selected toppings
    for (let i = 0; i < toppingArray.length; i++) {
      itemToppingPrice += Number(toppingArray[i].toppingPrice);
    }

    const existingItem = state.items[idChecker(state.items, action.item.id)];
    const existingItemIndex = idChecker(state.items, action.item.id);

    //If there is only 1 of the item in the cart, remove the whole item
    if (existingItem.amount === 1) {
      console.log("removing " + action.item.id);
      updatedItems.pop(existingItem);
    } else {
      let updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };

      updatedItems[existingItemIndex] = updatedItem;
    }


    let updatedTotalAmount =
      state.totalAmount - existingItem.price - itemToppingPrice - sizePrice;

      // console.log("state.totalAmount: " + state.totalAmount);
      // console.log("existingItem.price: " + existingItem.price);
      // console.log("itemToppingPrice: " + itemToppingPrice);
      // console.log("sizePrice: " + sizePrice);
      // console.log("updatedTotalAmount: " + updatedTotalAmount);
      
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartActions] = useReducer(cartReducer, emptyCart);

  const addItemToCartHandler = (item) => {
    dispatchCartActions({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (item) => {
    dispatchCartActions({ type: "REMOVE", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
