import { useEffect, useRef } from "react";

const Topping = (props) => {
  const checkboxRef = useRef();
  const toppingsArray = props.toppingsArray;

  //When page is loaded, add all default toppings to list
  useEffect(() => {
    if (checkboxRef.current.checked) {
      props.toppingsArray.push({
        toppingName: props.name,
        toppingPrice: props.price,
      });
    }
  }, []);

  //used to format pricing, says free if 0$
  const priceDisplayer = (price) => {
    if (price === 0) {
      return <h5></h5>;
    } else {
      return <h5>+${props.price.toFixed(2)}</h5>;
    }
  };

  //returns true if element is in the array
  const isElementInArray = (array, element) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].toppingName === element) {
        return true;
      }
    }
  };

  //returns the index of specified topping
  const indexFinder = (array, toppingName) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].toppingName === toppingName) {
        return i;
      }
    }
    return -1;
  };

  //when checkbox is selected, add topping to new array
  const selectedBoxHandler = () => {
    //if topping is not array in the array, add it to the
    if (checkboxRef.current.checked === true) {
      //checks if topping is already in the array
      if (isElementInArray(toppingsArray, props.name)) {
        return;
      } else {
        //if not add topping to the array
        props.toppingsArray.push({
          toppingName: props.name,
          toppingPrice: props.price,
        });
      }

      //removes topping from array if unchecked
    } else if (checkboxRef.current.checked === false) {
      props.toppingsArray.splice(
        indexFinder(props.toppingsArray, props.name),
        1
      );
    }
  };

  //can click on div to checked/uncheck topping
  const divClickHandler = () => {
    checkboxRef.current.checked = !checkboxRef.current.checked;
    selectedBoxHandler();
  };

  return (
    <>
      <div onClick={divClickHandler}>
        <h3>{props.name}</h3>
        {priceDisplayer(props.price)}
      </div>
      <input
        ref={checkboxRef}
        type="checkbox"
        onChange={selectedBoxHandler}
        defaultChecked={props.isSelected}
      ></input>
    </>
  );
};

export default Topping;
