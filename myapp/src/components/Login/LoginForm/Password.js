import React, { useEffect } from "react";
import { Input } from "../../../UI/Input.styled";
import { useDispatch, useSelector } from "react-redux";
import { passwordReducer, passwordIsValidReducer } from "../../../redux/form";

const Password = () => {
  const styles = useSelector((state) => state.style);
  const password = useSelector((state) => state.form.password);
  const passwordIsValid = useSelector((state) => state.form.passwordIsValid);
  const dispatch = useDispatch();
  //   console.log(password);
  //   console.log(passwordIsValid);

  const passwordHandler = (event) => {
    dispatch(passwordReducer({ password: event.target.value }));
    const timeOut = setTimeout(() => {
      if (password.length > 5) {
        dispatch(passwordIsValidReducer({ passwordIsValid: true }));
      } else if (password.length < 5) {
        dispatch(passwordIsValidReducer({ passwordIsValid: false }));
      }
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  };
  useEffect(() => {}, [password]);
  return (
    <>
      <Input
        // type="password"
        height={"2rem"}
        placeholder={"PASSWORD"}
        mg={"2rem 2rem 0 2rem"}
        width={"14rem"}
        bd={"none"}
        br={"5px"}
        bdlt={
          passwordIsValid
            ? `5px solid ${styles.colors.darkBlue}`
            : `5px solid red`
        }
        bdrt={
          passwordIsValid
            ? `5px solid ${styles.colors.darkBlue}`
            : `5px solid red`
        }
        onChange={passwordHandler}
      />
    </>
  );
};

export default Password;
