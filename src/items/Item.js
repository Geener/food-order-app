const Item = (props) => {
  //When div is clicked, proper food is selected
  const clickHandler = () => {
    // console.log(props.food);
    props.onSelectedFood(props.food);
  };

  return <span onClick={clickHandler}>{props.children}</span>;
};

export default Item;
