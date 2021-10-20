import Item from "../../../items/Item";
import { mainMeals, sideMeals, drinks } from "../../../Menu";

import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

const CategoryMainSection = (props) => {
  const mainItemCards = mainMeals.map((meal) => {
    return (
      <Item
        key={meal.id}
        food={meal}
        onSelectedFood={props.onSelectCurrentFood}
      >
        <Card>
          <Card.Img variant="top" src={meal.picture} />
          <Card.Body>
            <Card.Title>
              {meal.name} ${meal.price}
            </Card.Title>
            <Card.Text>{meal.description}</Card.Text>
          </Card.Body>
        </Card>
      </Item>
    );
  });

  const sideItemCards = sideMeals.map((meal) => {
    return (
      <Item
        key={meal.id}
        food={meal}
        onSelectedFood={props.onSelectCurrentFood}
      >
        <Card>
          <Card.Img variant="top" src={meal.picture} />
          <Card.Body>
          <Card.Title>
              {meal.name} ${meal.price}
          </Card.Title>
          <Card.Text>{meal.description}</Card.Text>
          </Card.Body>
        </Card>
      </Item>
    );
  });

  const drinkCards = drinks.map((meal) => {
    return (
      <Item
        key={meal.id}
        food={meal}
        onSelectedFood={props.onSelectCurrentFood}
      >
        <Card>
          <Card.Img variant="top" src={meal.picture} />
          <Card.Body>
          <Card.Title>
              {meal.name} ${meal.price}
          </Card.Title>
          <Card.Text>{meal.description}</Card.Text>
          </Card.Body>
        </Card>
      </Item>
    );
  });

  return (
    <>
      <Card style={{ width: "90%" }}>
        <Card.Body>
          <Card.Title>Main Items</Card.Title>
          <CardGroup>{mainItemCards}</CardGroup>
        </Card.Body>
      </Card>
      <Card style={{ width: "90%" }}>
        <Card.Body>
          <Card.Title>Side Items</Card.Title>
          <CardGroup>{sideItemCards}</CardGroup>
        </Card.Body>
      </Card>
      <Card style={{ width: "90%" }}>
        <Card.Body>
          <Card.Title>Drinks</Card.Title>
          <CardGroup>{drinkCards}</CardGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default CategoryMainSection;
