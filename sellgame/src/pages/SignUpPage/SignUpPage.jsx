import React from "react";
import { WrapperContainerLeft, WrapperContainerRight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../assets/images/signin1.jpg";
import { Image } from "antd";
const SignUpPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)", //doi background chổ này
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Để Đăng Ký</h1>
          <p>Tạo Tài Khoản</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
          ></InputForm>
          <InputForm style={{ marginBottom: "10px" }} placeholder="Password" />
          <InputForm placeholder="ComfirmPassword" />
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              width: "100%",
              height: "48px",
              border: "none",
              boderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textbutton={"Đăng Ký"}
            styleTextbutton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>

          <p>
            Bạn đã có tài khoản? <span> Đăng Nhập</span>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="iamge-logo"
            height="445px"
            width="303px"
          />
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
