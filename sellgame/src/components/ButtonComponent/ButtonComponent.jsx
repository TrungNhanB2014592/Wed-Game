import { Button } from "antd";
import React from "react";

const ButtonComponent = ({
  size,
  styleButton,
  styleTextbutton,
  textbutton,
  ...rest
}) => {
  return (
    <Button size={size} style={styleButton} {...rest}>
      <span style={styleTextbutton}>{textbutton}</span>
    </Button>
  );
};

export default ButtonComponent;
