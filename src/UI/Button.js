import BootstrapButton from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

const Button = (props) => {
  return (
    <BootstrapButton onClick={props.onClick} id={props.id} style={{backgroundColor: "rgb(0, 191, 255)", color: "black", boxShadow: "none"}}>
      {props.children}
    </BootstrapButton>
  );
};

export default Button;
