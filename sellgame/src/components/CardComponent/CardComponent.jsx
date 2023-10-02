import { Card } from "antd";
import { Meta } from "antd/es/list/Item";
import React from "react";
import {
  StyleNameProduct,
  WapperDiscountText,
  WapperPriceText,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons";
const CardComponent = () => {
  return (
    <Card
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 240 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span>4.9</span>{" "}
        <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
        <span> | Đã Bán 1000++</span>
      </WrapperReportText>
      <WapperPriceText>
        200.000d <WapperDiscountText>-20%</WapperDiscountText>
      </WapperPriceText>
    </Card>
  );
};

export default CardComponent;
