import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../UI/Card.styled";
import { Button } from "../../UI/Button.styled";
import Form from "./LoginForm/Form";
import { formIsValidReducer } from "../../redux/form";
import "./login.css";

const LoginPage = () => {
  const styles = useSelector((state) => state.style);
  const { email } = useSelector((state) => state.form);
  const { password } = useSelector((state) => state.form);
  const { emailIsValid } = useSelector((state) => state.form);
  const { passwordIsValid } = useSelector((state) => state.form);
  const { formIsValid } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const formOnSubmit = () => {
    if (
      emailIsValid &&
      passwordIsValid &&
      email.length > 0 &&
      password.length > 0
    ) {
      dispatch(formIsValidReducer({ formIsValid: true }));
      console.log("y");
      console.log(formIsValid);
    }
  };
  return (
    <center>
      <Card
        mg={"10rem 0rem"}
        height={"22rem"}
        width={"25rem"}
        bg={styles.colors.mainWhite}
        bs={"0px 0px 100px rgb(229, 229, 229)"}
        br={"2rem 0px"}
        ovfy={"hidden"}
        ovfx={"hidden"}
        position={"relative"}
        zindex={"1"}
      >
        <div className="loginCircle1"></div>
        <div className="loginCircle2"></div>
        <div className="loginCircle3"></div>
        <Card
          bd={"none"}
          height={"3rem"}
          ps={"relative"}
          pstp={"0rem"}
          // mg={" 19rem 0 0 0"}
          width={"100%"}
          bg={styles.colors.darkBlue}
          cl={styles.colors.mainWhite}
        ></Card>
        <Form />
        <Button
          onClick={formOnSubmit}
          bd={"none"}
          height={"3rem"}
          ps={"relative"}
          pstp={"3rem"}
          // mg={" 19rem 0 0 0"}
          width={"100%"}
          bg={styles.colors.darkBlue}
          cl={styles.colors.mainWhite}
        >
          LOGIN
        </Button>
      </Card>
    </center>
  );
};

export default LoginPage;
