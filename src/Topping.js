const Topping = (props) => {
  const priceDisplayer = (price) => {
    if (price === 0) {
      return <h5>Free</h5>;
    } else {
      return <h5>${props.price}</h5>;
    }
  };

  return (
    <>
      <h3>{props.name}</h3>
      {priceDisplayer(props.price)}
      <input type="checkbox"></input>
    </>
  );
};

export default Topping;
