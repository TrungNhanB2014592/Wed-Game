import React from "react";
import { WapperLableText, WrapperContent, WrapperTextValue } from "./style";
import Checkbox from "antd/es/checkbox/Checkbox";

const NavbarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option) => {
              return (
                <Checkbox style={{ marginLeft: 0 }} value={option.value}>
                  {option.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );

      default:
        return {};
    }
  };
  return (
    <div>
      <WapperLableText>Duyệt Theo Thể Loại</WapperLableText>
      <WrapperContent>
        {renderContent("text", ["Chơi miễn phí", "Hành Động", "Phiêu Lưu"])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
