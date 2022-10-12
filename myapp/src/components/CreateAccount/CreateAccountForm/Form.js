import React from "react";
import Email from "./Email";
import Password from "./Password";
import FullName from "./fullName";
import VerifyPassword from "./verifyPassword";
import { Card } from "../../../UI/Card.styled";
const Form = () => {
  return (
    <>
      <Card
        // height={"10rem"}
        width={"80%"}
        // bd={"1px solid red"}
        mg={"0.5rem 2.5rem 0rem 2.5rem "}
      >
        <FullName />
        <Email />
        <Password />
        <VerifyPassword />
      </Card>
    </>
  );
};

export default Form;
