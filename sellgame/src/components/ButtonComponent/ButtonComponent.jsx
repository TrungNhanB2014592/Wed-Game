import { Button } from "antd";
import React from "react";

const ButtonComponent = ({
  size,
  styleButton,
  styleTextbutton,
  testButton,
  ...rest
}) => {
  return (
    <Button size={size} style={styleButton} {...rest}>
      <span style={styleTextbutton}>{testButton}</span>
    </Button>
  );
};

export default ButtonComponent;
