import BootstrapButton from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

const Button = (props) => {
  return (
    <BootstrapButton onClick={props.onClick} id={props.id} style={{backgroundColor: "rgb(0, 191, 255)", color: "black", boxShadow: "none", fontSize: "22px", marginBottom:"14px"}}>
      {props.children}
    </BootstrapButton>
  );
};

export default Button;
