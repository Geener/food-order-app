const Item = (props) => {
  //When div is clicked, proper food is selected
  const clickHandler = () => {
    // console.log(props.food);
    props.onSelectedFood(props.food);
  };

  return <div onClick={clickHandler}>{props.children}</div>;
};

export default Item;
