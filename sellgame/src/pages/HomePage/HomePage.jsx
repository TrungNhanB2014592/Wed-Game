import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";
const HomePage = () => {
  const arr = ["TV", "TuLanh", "LapTop"];
  return (
    <div style={{ padding: "0 120px" }}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </WrapperTypeProduct>
      {<SliderComponent arrImages={[slider1, slider2, slider3]} />}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <CardComponent />
      </div>
    </div>
  );
};

export default HomePage;
