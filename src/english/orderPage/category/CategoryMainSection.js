import Item from "../../../items/Item";
import { mainMeals, sideMeals, drinks } from "../../../Menu";

import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

import classes from "./CategoryMainSection.module.css";

const CategoryMainSection = (props) => {
  const mainItemCards = mainMeals.map((meal) => {
    return (
      <Item
        key={meal.id}
        food={meal}
        onSelectedFood={props.onSelectCurrentFood}
      >
        <div className={classes.itemCard}>
          <div className={classes.itemInfo}>
            <div className={classes.itemTitle}>{meal.name} ${meal.price}</div>
            <div className={classes.itemDescription}>{meal.description}</div>
          </div>
          <div itemDeclassName={classes.itemPicture}scription><img src={meal.picture}></img></div>
        </div>
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
        <div className={classes.itemCard}>
          <div className={classes.itemInfo}>
            <div className={classes.itemTitle}>{meal.name} ${meal.price}</div>
            <div className={classes.itemDescription}>{meal.description}</div>
          </div>
          <div itemDeclassName={classes.itemPicture}scription><img src={meal.picture}></img></div>
        </div>
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
        <div className={classes.itemCard}>
          <div className={classes.itemInfo}>
            <div className={classes.itemTitle}>{meal.name} ${meal.price}</div>
            <div className={classes.itemDescription}>{meal.description}</div>
          </div>
          <div itemDeclassName={classes.itemPicture}scription><img src={meal.picture}></img></div>
        </div>
      </Item>
    );
  });

  return (
    <div className={classes.mainBackground}>
      <div className={classes.sectionHeader}><h1>Main Items</h1></div>
      {mainItemCards}
      <div className={classes.sectionHeader}><h1>Side Items</h1></div>
      {sideItemCards}
      <div className={classes.sectionHeader}><h1>Drinks</h1></div>
      {drinkCards}
    </div >
  );
};

export default CategoryMainSection;
