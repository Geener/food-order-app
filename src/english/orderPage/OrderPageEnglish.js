import { useState } from "react";
import Header from "../../UI/header/Header";
import Cart from "../../cart/Cart";
import CategoryMainSection from "./category/CategoryMainSection";
import ItemPage from "../../items/ItemPage";

const OrderPageEnglish = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [currentFood, setCurrentFood] = useState({
    name: null,
    description: null,
    picture: null,
    toppings: null,
    id: null,
  });

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  const closeCartHandler = () => {
    setIsCartOpen(false);
  };

  const selectCurrentFood = (item) => {
    setCurrentFood(item);
  };

  return (
    <>
      <Header onOpenCart={openCartHandler} />
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
