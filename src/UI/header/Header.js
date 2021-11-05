import CartButton from "../../cart/CartButton";
import classes from "./Header.module.css";
import { nullItem } from "../../Menu"


const Header = (props) => {

  const clickHandler = () => {
    props.onSelectCurrentFood(nullItem)
  };

  return (
    <div className={classes.header}><h1 onClick={clickHandler}>McDonalds</h1><div><CartButton onOpenCart={props.onOpenCart} /></div></div>
  );
};

export default Header;
