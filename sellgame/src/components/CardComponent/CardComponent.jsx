import { Card } from "antd";
import React from "react";
import {
  StyleNameProduct,
  WapperDiscountText,
  WapperPriceText,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import { WrapperStyleTextSell } from "../ProductDetailsComponent/style";
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
          src="https://cdn.akamai.steamstatic.com/steam/spotlights/e8c76824353e70e1f64b2eea/spotlight_image_english.jpg?t=1696287679"
        />
      }
    >
      <StyleNameProduct>Game</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>4.9</span>
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell> | Đã Bán 1000+</WrapperStyleTextSell>
      </WrapperReportText>
      <WapperPriceText>
        <span style={{ marginRight: "8px" }}>200.000đ</span>
        <WapperDiscountText>-20%</WapperDiscountText>
      </WapperPriceText>
    </Card>
  );
};

export default CardComponent;
