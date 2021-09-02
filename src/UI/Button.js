import BootstrapButton from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

const Button = (props) => {
  return (
    <BootstrapButton onClick={props.onClick} id={props.id}>
      {props.children}
    </BootstrapButton>
  );
};

export default Button;
