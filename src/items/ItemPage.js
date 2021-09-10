import Topping from "./Topping";

import ItemForm from "./itemForm/ItemForm";

import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";

const ItemPage = (props) => {
  //array of all the toppings for selected food
  const allToppings = props.selectedFood.toppings;

  const selectedToppingsArray = [];

  const options = allToppings.map((topping) => {
    return (
      <>
        <ListGroup.Item>
          <Topping
            toppingsArray={selectedToppingsArray}
            name={topping.name}
            price={topping.price}
            isSelected={topping.isSelected}
          />
        </ListGroup.Item>
      </>
    );
  });

  return (
    <>
      <Card style={{ width: "90%" }}>
        <Card.Header>Select your toppings</Card.Header>
        <ListGroup variant="flush">{options}</ListGroup>
      </Card>
      <ItemForm
        toppingsArray={selectedToppingsArray}
        selectedFood={props.selectedFood}
        onSelectCurrentFood={props.onSelectCurrentFood}
      />
    </>
  );
};

export default ItemPage;
