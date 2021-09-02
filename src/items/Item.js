const Item = (props) => {
  const clickHandler = () => {
    props.onSelectedFood(props.food);
  };

  return <div onClick={clickHandler}>{props.children}</div>;
};

export default Item;
