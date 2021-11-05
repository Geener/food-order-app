import { useState } from "react";
import Header from "../../UI/header/Header";
import Cart from "../../cart/Cart";
import CategoryMainSection from "./category/CategoryMainSection";
import ItemPage from "../../items/ItemPage";

const OrderPageEnglish = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  //Controls what food is originally selected, initially set to null
  const [currentFood, setCurrentFood] = useState({
    name: null,
    description: null,
    picture: null,
    toppings: null,
    id: null,
  });

  //used to open the cart
  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  //used to close the cart
  const closeCartHandler = () => {
    setIsCartOpen(false);
  };

  const selectCurrentFood = (item) => {
    setCurrentFood(item);
  };


  return (
    <>
      <Header onOpenCart={openCartHandler} onSelectCurrentFood={selectCurrentFood}/>
      {isCartOpen && <Cart onCloseCart={closeCartHandler} />}
      {currentFood.name === null && (
        <CategoryMainSection onSelectCurrentFood={selectCurrentFood} />
      )}
      {currentFood.name !== null && (
        <ItemPage
          selectedFood={currentFood}
          onSelectCurrentFood={selectCurrentFood}
        />
      )}
    </>
  );
};

export default OrderPageEnglish;
