import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../UI/Card.styled";
import { Button } from "../../UI/Button.styled";
import Form from "./CreateAccountForm/Form";
import { formIsValidReducer, passwordVerifyReducer } from "../../redux/form";
import { registerReducer } from "../../redux/form";
import { emailReducer } from "../../redux/form";
import { nameReducer } from "../../redux/form";
import { passwordReducer } from "../../redux/form";
import Password from "./CreateAccountForm/Password";
// import "./login.css";
import axios from "axios";
const BASEURL = "https://63322126a54a0e83d24c89f7.mockapi.io/";
const CreateAccountPage = () => {
  const [users, setUsers] = useState([{}]);
  const [usersMatch, setUsersMatch] = useState(false);
  const { email } = useSelector((state) => state.form);
  useEffect(() => {
    axios.get(`${BASEURL}/Users`).then((response) => {
      // console.log(response.data);
      setUsers(response.data);
    });
  }, []);
  useEffect(() => {
    users.map((item) => {
      // console.log(item);
      if (item.email === email) {
        setUsersMatch(true);
      } else {
        setUsersMatch(false);
      }
    });
  }, [email]);
  const styles = useSelector((state) => state.style);

  const { fullName } = useSelector((state) => state.form);
  const { password } = useSelector((state) => state.form);
  const { emailIsValid } = useSelector((state) => state.form);
  const { passwordIsValid } = useSelector((state) => state.form);
  const { formIsValid } = useSelector((state) => state.form);
  const [bgColor, setBgColor] = useState(styles.colors.darkBlue);
  const dispatch = useDispatch();
  // console.log(fullName);
  const formOnSubmit = () => {
    if (
      emailIsValid &&
      passwordIsValid &&
      email.length > 5 &&
      password.length > 5 &&
      usersMatch === false
    ) {
      console.log("yes");
      axios
        .post(`${BASEURL}/Users`, {
          name: fullName,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
        });
      dispatch(formIsValidReducer({ formIsValid: true }));
      alert("ACCOUNT CREATED!! YOU CAN NOW LOGIN!!!");
      dispatch(emailReducer({ email: "" }));
      dispatch(nameReducer({ fullName: "" }));
      dispatch(passwordReducer({ password: "" }));
      dispatch(passwordVerifyReducer({ passwordVerifyValue: "" }));
    } else {
    }
  };
  console.log(usersMatch);
  // console.log(password);
  const loginHandler = () => {
    dispatch(registerReducer({ register: false }));
  };
  return (
    <center>
      <Card
        mg={"15rem 0rem"}
        height={"18rem"}
        width={"25rem"}
        bg={styles.colors.mainWhite}
        bs={"0px 0px 100px rgb(229, 229, 229)"}
        font={styles.fonts.mainFont}
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
          onClick={loginHandler}
          fs={"0.8rem"}
          ps={"absolute"}
          mg={"1rem 0 0 20rem"}
          hvfs={"0.82rem"}
          hvcl={styles.colors.darkBlue}
          tr={"0.2s"}
        >
          Login?
        </Card>
        <Card
          bd={"none"}
          height={"1rem"}
          ps={"relative"}
          pstp={"0rem"}
          // mg={" 19rem 0 0 0"}
          width={"100%"}
          // bg={styles.colors.darkBlue}
          // cl={styles.colors.mainWhite}
        ></Card>
        <Form />
        <Button
          onClick={formOnSubmit}
          bd={"none"}
          height={"3rem"}
          ps={"relative"}
          pstp={"1.5rem"}
          // mg={" 19rem 0 0 0"}
          width={"100%"}
          bg={bgColor}
          cl={styles.colors.mainWhite}
        >
          REGISTER
        </Button>
      </Card>
    </center>
  );
};

export default CreateAccountPage;
