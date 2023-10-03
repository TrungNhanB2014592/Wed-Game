import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProduct, WrapperTypeProduct } from "./style";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

const HomePage = () => {
  const arr = ["Thể Loại", "Cộng Đồng", "Tin Tức"];
  return (
    <div style={{ padding: "0 120px" }}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </WrapperTypeProduct>
      {<SliderComponent arrImages={[slider1, slider2, slider3]} />}
      <WrapperProduct>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </WrapperProduct>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <WrapperButtonMore
          textbutton="Xem Thêm"
          type="outline"
          styleButton={{
            border: "1px solid rgb(11,116,229)",
            color: "rgb(11, 116, 229)",
            width: "240px",
            height: "38px",
            borderRadius: "5px",
          }}
          styleTextbutton={{ fontWeight: 500 }}
        />
      </div>
    </div>
  );
};

export default HomePage;
