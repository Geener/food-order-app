import BurgerPic from "./images/burger.jpg";
import SandwichPic from "./images/sandwich.jpg";
import WrapPic from "./images/wrap23.jpg";
import ChickenNuggetsPic from "./images/chick.jpg";
import FriesPic from "./images/fries.png";
import IcecreamPic from "./images/icecream.png";
import CookiePic from "./images/cookie.png";
import CoffeePic from "./images/coffee.png"
import HotChocolatePic from "./images/hotchocolate.jpg"
import AlcoholPic from "./images/alcohol.png"

const mainMeals = [
  {
    name: "Burger",
    description: "This is a delicious burger",
    picture: BurgerPic,
    toppings: [
      { name: "Ketchup", price: 0, isSelected: true, id: "t1" },
      { name: "Mustard", price: 0, isSelected: false, id: "t2"  },
      { name: "Relish", price: 0, isSelected: false, id: "t3"  },
      { name: "Lettuce", price: 0, isSelected: true, id: "t4"  },
      { name: "Tomato", price: 0, isSelected: true, id: "t5" },
      { name: "Bacon", price: 0.99, isSelected: false, id: "t6" },
    ],
    sizes: [
      { name: "One Patty", price: 0.00, isSelected: true, id: "s0" },
      { name: "Double Patty", price: 1.99, isSelected: false, id: "s1" },
    ],
    id: "m1",
    price: 5.99,
  },
  {
    name: "Sandwich",
    description: "This is a delicious Sandwich",
    picture: SandwichPic,
    toppings: [
      { name: "Ketchup", price: 0, isSelected: false, id: "t7" },
      { name: "Mustard", price: 0, isSelected: false, id: "t8" },
      { name: "BBQ Sauce", price: 0, isSelected: false, id: "t9" },
    ],
    sizes: [
      { name: "6 Inch", price: 0, isSelected: true, id: "1s2" },
      { name: "12 Inch", price: 3.99, isSelected: false, id: "2s3" },
    ],
    id: "m2",
    price: 6.99,
  },
  {
    name: "Wrap",
    description: "This is a delicious Wrap",
    picture: WrapPic,
    toppings: [
      { name: "Ketchup", price: 0, isSelected: false, id: "t10" },
      { name: "Mustard", price: 0, isSelected: false, id: "t11" },
      { name: "BBQ Sauce", price: 0, isSelected: false, id: "t12" },
    ],
    sizes: [
      { name: "Normal", price: 0, isSelected: true, id: "s17" },
      { name: "Large", price: 0.99, isSelected: false, id: "s18" },
    ],
    id: "m3",
    price: 5.99
  },
  {
    name: "Chicken Nuggets",
    description: "This is a delicious Chicken Nuggets",
    picture: ChickenNuggetsPic,
    toppings: [
      { name: "Ketchup", price: 0, isSelected: false, id: "t13" },
      { name: "Mustard", price: 0, isSelected: false, id: "t14" },
      { name: "BBQ Sauce", price: 0, isSelected: false, id: "t15" },
    ],
    sizes: [
      { name: "6 Nuggets", price: 0, isSelected: true, id: "s2" },
      { name: "12 Nuggets", price: 3.99, isSelected: false, id: "s3" },
      { name: "25 Nuggets", price: 7.99, isSelected: false, id: "s4" },
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
      { name: "Ketchup", price: 0, isSelected: false, id: "t13" },
      { name: "Mustard", price: 0, isSelected: false, id: "t14" },
      { name: "BBQ Sauce", price: 0, isSelected: false, id: "t15" },
    ],
    sizes: [
      { name: "Small", price: 0, isSelected: true, id: "s5" },
      { name: "Medium", price: 1.99, isSelected: false, id: "s6" },
      { name: "Large", price: 2.99, isSelected: false, id: "s7" },
    ],
    id: "s1",
    price: 1.99,
  },
  {
    name: "Ice Cream",
    description: "This is a delicious Ice Cream",
    picture: IcecreamPic,
    toppings: [
      { name: "Vanilla", price: 0, isSelected: true, id: "t16" },
      { name: "Chocolate", price: 0, isSelected: false, id: "t17" },
    ],
    sizes: [
      { name: "Single Scoop", price: 0, isSelected: true, id: "s8"},
      { name: "Double Scoop", price: 0.99, isSelected: false, id: "s9" },
    ],
    id: "s2",
    price: 1.99,
  },
  {
    name: "Cookie",
    description: "This is a delicious Cookie",
    picture: CookiePic,
    toppings: [
      { name: "Chocolate Chips", price: 0, isSelected: false, id: "1t17" },
      { name: "Raisins", price: 0, isSelected: false, id: "2t17" },
    ],
    sizes: [
      { name: "Normal", price: 0, isSelected: true, id: "s17" },
      { name: "Double Decker", price: 0.99, isSelected: false, id: "s18" },
    ],
    id: "s3",
    price: 0.99,
  },
];

const drinks = [
  {
    name: "Coffee",
    description: "This is a delicious Coffee",
    picture: CoffeePic,
    id: "d0",
    price: 0.99,
    sizes: [
      { name: "Small", price: 0, isSelected: true, id: "s11" },
      { name: "Medium", price: 0.50, isSelected: false, id: "s12" },
      { name: "Large", price: 0.99, isSelected: false, id: "s13" },
    ],
    toppings: [
      { name: "Milk", price: 0.0, isSelected: true, id: "t18" },
      { name: "Sugar", price: 0.0, isSelected: true, id: "t19" },
      { name: "Caramel", price: 0.50, isSelected: false, id: "t20" },
      { name: "Vanilla", price: 0.50, isSelected: false, id: "t21" },
    ],
  },
  {
    name: "Hot Chocolate",
    description: "This is a delicious Hot Chocolate",
    picture: HotChocolatePic,
    id: "d1",
    price: 1.99,
    sizes: [
      { name: "Small", price: 0, isSelected: true, id: "s14" },
      { name: "Medium", price: 0.99, isSelected: false, id: "s15" },
      { name: "Large", price: 1.99, isSelected: false, id: "s16" },
    ],
    toppings: [
      { name: "Marshmellows", price: 0.25, isSelected: false, id: "t22" }
    ],
  },
  {
    name: "Soft Drink",
    description: "This is a delicious Soft Drink",
    picture: AlcoholPic,
    id: "d2",
    price: 0.99,
    sizes: [
      { name: "Small", price: 0, isSelected: true, id: "s17" },
      { name: "Medium", price: 0.99, isSelected: false, id: "s18" },
      { name: "Large", price: 1.99, isSelected: false, id: "s19" },
    ],
    toppings: [
      { name: "Extra Ice", price: 0, isSelected: false, id: "t23" }
    ],
  },
];

const nullItem = {name: null,
  description: null}
  


export { mainMeals, sideMeals, drinks, nullItem };
