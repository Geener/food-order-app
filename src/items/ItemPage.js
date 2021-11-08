import Topping from "./Topping";
import Size from "./Size"

import ItemForm from "./itemForm/ItemForm";

import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";

const ItemPage = (props) => {
  //array of all the toppings for selected food
  const allToppings = props.selectedFood.toppings;
  const allSizes = props.selectedFood.sizes;

  const selectedToppingsArray = [];
  const selectedSizeArray = [];

  const toppingOptions = allToppings.map((topping) => {
    return (
      <>
        <ListGroup.Item>
          <Topping
            toppingsArray={selectedToppingsArray}
            name={topping.name}
            price={topping.price}
            isSelected={topping.isSelected}
            key={topping.id}
          />
        </ListGroup.Item>
      </>
    );
  });

  const sizeOptions = allSizes.map((size) => {
    return (
      <>
      <ListGroup.Item>
          <Size 
            sizeArray={selectedSizeArray} 
            name={size.name}
            price={size.price}
            isSelected={size.isSelected}
            key={size.id}
          />
        </ListGroup.Item>
        </>
    )
  })

  return (
    <>
      <Card style={{ width: "90%" }}>
        {allSizes.length > 0 && <Card.Header>Select your size</Card.Header>}
        <ListGroup variant="flush">{sizeOptions}</ListGroup>
        {allToppings.length > 0 && <Card.Header>Select your toppings</Card.Header>}
        <ListGroup variant="flush">{toppingOptions}</ListGroup>
        
      </Card>
      <ItemForm
        toppingsArray={selectedToppingsArray}
        sizeArray = {selectedSizeArray}
        selectedFood={props.selectedFood}
        onSelectCurrentFood={props.onSelectCurrentFood}
      />
    </>
  );
};

export default ItemPage;
