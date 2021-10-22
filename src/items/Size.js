import { useEffect, useRef } from "react";

const Size = (props) => {
  const checkboxRef = useRef();
  let sizeArray = props.sizeArray;

  //When page is loaded, add all default toppings to list
  useEffect(() => {
    if (checkboxRef.current.checked) {
        props.sizeArray.push({
            sizeName: props.name,
            sizePrice: props.price,
        })
    }
  }, []);

  //used to format pricing, says free if 0$
  const priceDisplayer = (price) => {
    if (price === 0) {
      return <h5></h5>;
    } else {
      return <h5>+${props.price}</h5>;
    }
  };

  //when checkbox is selected, empty sizeArray and add new size to array
  const selectedBoxHandler = () => {   
    sizeArray.splice(0);
    sizeArray.push({
        sizeName: props.name,
        sizePrice: props.price,
    })
    console.log(sizeArray[0])
    console.log(sizeArray)
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
        type="radio"
        name="size"
        onChange={selectedBoxHandler}
        defaultChecked={props.isSelected}
      ></input>
    </>
  );
};

export default Size;
