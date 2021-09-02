import BurgerPic from "./images/burger.jpg";
import SandwichPic from "./images/sandwich.jpg";
import WrapPic from "./images/wrap23.jpg";
import ChickenNuggetsPic from "./images/chick.jpg";
import FriesPic from "./images/fries.png";
import IcecreamPic from "./images/icecream.png";
import CookiePic from "./images/cookie.png";

const mainMeals = [
  {
    name: "Burger",
    description: "This is a delicious burger",
    picture: BurgerPic,
    toppings: [
      { name: "Ketchup", price: 0, isSelected: false },
      { name: "Mustard", price: 0, isSelected: false },
      { name: "Relish", price: 0, isSelected: false },
      { name: "Lettuce", price: 0.99, isSelected: false },
      { name: "Tomatoe", price: 0.99, isSelected: false },
      { name: "Bacon", price: 1.99, isSelected: false },
    ],
    id: "m1",
    price: 5.99,
  },
  {
    name: "Sandwich",
    description: "This is a delicious Sandwich",
    picture: SandwichPic,
    toppings: [
      { name: "Ketchup", price: 0, isSelected: false },
      { name: "Mustard", price: 0, isSelected: false },
      { name: "BBQ Sauce", price: 0, isSelected: false },
    ],
    id: "m2",
    price: 6.99,
  },
  {
    name: "Wrap",
    description: "This is a delicious Wrap",
    picture: WrapPic,
    toppings: [
      { name: "Ketchup", price: 0, isSelected: false },
      { name: "Mustard", price: 0, isSelected: false },
      { name: "BBQ Sauce", price: 0, isSelected: false },
    ],
    id: "m3",
    price: 5.99,
  },
  {
    name: "Chicken Nuggets",
    description: "This is a delicious Chicken Nuggets",
    picture: ChickenNuggetsPic,
    toppings: [
      { name: "Ketchup", price: 0, isSelected: false },
      { name: "Mustard", price: 0, isSelected: false },
      { name: "BBQ Sauce", price: 0, isSelected: false },
    ],
    id: "m4",
    price: 4.99,
  },
];

const sideMeals = [
  {
    name: "Fries",
    description: "This is a delicious Fries",
    picture: FriesPic,
  },
  {
    name: "Ice Cream",
    description: "This is a delicious Ice Cream",
    picture: IcecreamPic,
  },
  {
    name: "Cookie",
    description: "This is a delicious Cookie",
    picture: CookiePic,
  },
];

const drinks = [
  {
    name: "Coffee",
    description: "This is a delicious Coffee",
    picture: null,
  },
  {
    name: "Hot Chocolate",
    description: "This is a delicious Hot Chocolate",
    picture: null,
  },
  {
    name: "Soft Drink",
    description: "This is a delicious Soft Drink",
    picture: null,
  },
];

export { mainMeals, sideMeals, drinks };
