import { Badge, Col } from "antd";
import React from "react";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTextHeader,
  WrapperHeaderSmall,
} from "./style";
import Search from "antd/es/input/Search";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>Shell Game</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm Kiếm"
            placeholder="input search text"
            // onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: `20px` }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />

            <div>
              <span>Đăng nhập/Đăng ký</span>
              <div>
                <span>Tài Khoảng</span>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: `#fff` }}
              />
            </Badge>
            <WrapperHeaderSmall>Giỏ hàng</WrapperHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};
export default HeaderComponent;
