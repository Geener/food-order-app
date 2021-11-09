import Topping from "./Topping";
import Size from "./Size"
import ItemForm from "./itemForm/ItemForm";

import classes from "./ItemPage.module.css"

const ItemPage = (props) => {
  //array of all the toppings for selected food
  const allToppings = props.selectedFood.toppings;
  const allSizes = props.selectedFood.sizes;

  const selectedToppingsArray = [];
  const selectedSizeArray = [];

  const toppingOptions = allToppings.map((topping) => {
    return (
        <div className={classes.optionCard}>
        <Topping
            toppingsArray={selectedToppingsArray}
            name={topping.name}
            price={topping.price}
            isSelected={topping.isSelected}
            key={topping.id}
          />
      </div>
    );
  });

  const sizeOptions = allSizes.map((size) => {
    return (
      <div className={classes.optionCard}>
        <Size 
          sizeArray={selectedSizeArray} 
          name={size.name}
          price={size.price}
          isSelected={size.isSelected}
          key={size.id}/>
      </div>
    )
  })

  return (
    <div className={classes.mainBackground}>
      <div className={classes.customizeTitle}><h1>Customize your {props.selectedFood.name}</h1></div>
      <div className={classes.optionBlocks}>
        <div className={classes.sizes}>
          <h2 className={classes.sectionTitle}>Sizes</h2>
          <div className={classes.outerBorderSizes}>
            {sizeOptions}
          </div>
        </div>
        <div className={classes.addToCart}>
          <ItemForm
            toppingsArray={selectedToppingsArray}
            sizeArray = {selectedSizeArray}
            selectedFood={props.selectedFood}
            onSelectCurrentFood={props.onSelectCurrentFood}
          />
        </div>
        <div className={classes.toppings}>
          <h2 className={classes.sectionTitle}>Toppings</h2>
          <div className={classes.outerBorderToppings}>
            {toppingOptions}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ItemPage;
