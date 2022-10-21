import React from "react";
import Email from "./Email";
import Password from "./Password";
import { Card } from "../../../UI/Card.styled";
const Form = () => {
  return (
    <>
      <Card
        height={"10rem"}
        width={"80%"}
        // bd={"1px solid red"}
        mg={"3rem 2.5rem 0rem 2.5rem "}
        font={"'Open Sans', sans-serif"}
      >
        <Email />
        <Password />
      </Card>
    </>
  );
};

export default Form;
