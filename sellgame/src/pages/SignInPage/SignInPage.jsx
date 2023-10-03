import React from "react";
import { WrapperContainerLeft, WrapperContainerRight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../assets/images/signin1.jpg";
import { Divider, Image } from "antd";
const SignInPage = () => {
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
          <h1>Để đăng nhập</h1>
          <p>Đăng Nhập Bằng Tên Tài Khoản</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
          ></InputForm>
          <InputForm placeholder="Password" />
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
            textbutton={"Đăng Nhập"}
            styleTextbutton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <p>Quên mật khẩu ?</p>
          <p>
            Chưa có tài khoản?<span>Tạo tài khoản</span>
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

export default SignInPage;
