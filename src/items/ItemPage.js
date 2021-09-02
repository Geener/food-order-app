import Topping from "../Topping";

import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import AddToCartButton from "../english/orderPage/AddToCartButton";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const ItemPage = (props) => {
  const allToppings = props.selectedFood.toppings;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem(props.selectedFood);

    props.onSelectCurrentFood({
      name: null,
      description: null,
      picture: null,
      toppings: null,
      id: null,
    });
  };

  const options = allToppings.map((topping) => {
    return (
      <>
        <ListGroup.Item>
          <Topping name={topping.name} price={topping.price} />
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
      <AddToCartButton onClick={addToCartHandler} />
    </>
  );
};

export default ItemPage;
