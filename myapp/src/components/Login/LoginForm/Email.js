import React, { useEffect } from "react";
import { Input } from "../../../UI/Input.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  emailIsValidReducer,
  emailReducer,
  formIsValidReducer,
} from "../../../redux/form";
const Email = () => {
  const styles = useSelector((state) => state.style);
  const email = useSelector((state) => state.form.email);
  const emailIsValid = useSelector((state) => state.form.emailIsValid);
  const formIsValid = useSelector((state) => state.form.formIsValid);
  const dispatch = useDispatch();

  const emailHandler = (event) => {
    dispatch(emailReducer({ email: event.target.value }));
    const timeOut = setTimeout(() => {
      if (event.target.value.includes("@") && event.target.value.length > 5) {
        dispatch(emailIsValidReducer({ emailIsValid: true }));
        console.log("y");
      } else if (
        !event.target.value.includes("@") ||
        event.target.value.length < 5
      ) {
        dispatch(emailIsValidReducer({ emailIsValid: false }));
      }
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  };
  //   useEffect(() => {}, [email, emailIsValid]);
  return (
    <>
      <Input
        height={"2rem"}
        mg={"1rem 2rem 0 2rem"}
        width={"14rem"}
        placeholder={"EMAIL"}
        bd={"none"}
        br={"5px"}
        // bdlt={
        //   emailIsValid ? `5px solid ${styles.colors.darkBlue}` : `5px solid red`
        // }
        bdbt={
          emailIsValid ? `2px solid ${styles.colors.darkBlue}` : `2px solid red`
        }
        onChange={emailHandler}
        font={styles.mainFont}
      />
    </>
  );
};

export default Email;
