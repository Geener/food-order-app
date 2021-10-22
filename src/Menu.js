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
      { name: "Ketchup", price: 0, isSelected: true },
      { name: "Mustard", price: 0, isSelected: false },
      { name: "Relish", price: 0, isSelected: false },
      { name: "Lettuce", price: 0, isSelected: true },
      { name: "Tomato", price: 0, isSelected: true },
      { name: "Bacon", price: 0.99, isSelected: false },
    ],
    sizes: [
      { name: "Extra Patty", price: 1.99, isSelected: false },
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
    sizes: [

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
    sizes: [

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
    sizes: [
      { name: "6 Nuggets", price: 0, isSelected: true },
      { name: "12 Nuggets", price: 3.99, isSelected: false },
      { name: "25 Nuggets", price: 7.99, isSelected: false },
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
    toppings: [
    ],
    sizes: [
      { name: "Small", price: 0, isSelected: true },
      { name: "Medium", price: 0.99, isSelected: false },
      { name: "Large", price: 1.99, isSelected: false },
    ],
    id: "s1",
    price: 1.99,
  },
  {
    name: "Ice Cream",
    description: "This is a delicious Ice Cream",
    picture: IcecreamPic,
    toppings: [
      { name: "Vanilla", price: 0, isSelected: true },
      { name: "Chocolate", price: 0, isSelected: false },
    ],
    sizes: [
      { name: "Single Scoop", price: 0, isSelected: true },
      { name: "Double Scoop", price: 0.99, isSelected: false },
    ],
    id: "s2",
    price: 1.99,
  },
  {
    name: "Cookie",
    description: "This is a delicious Cookie",
    picture: CookiePic,
    toppings: [
      
    ],
    sizes: [
      { name: "Extra Cookie", price: 0.50, isSelected: false },
    ],
    id: "s3",
    price: 0.99,
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
