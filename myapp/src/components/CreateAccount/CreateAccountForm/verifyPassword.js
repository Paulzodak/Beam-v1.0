import React, { useEffect } from "react";
import { Input } from "../../../UI/Input.styled";
import { useDispatch, useSelector } from "react-redux";
import { passwordReducer, passwordIsValidReducer } from "../../../redux/form";
import { passwordVerifyReducer } from "../../../redux/form";
import { passwordStateVerifyReducer } from "../../../redux/form";
const VerifyPassword = () => {
  const styles = useSelector((state) => state.style);
  const password = useSelector((state) => state.form.password);
  const passwordVerify = useSelector(
    (state) => state.form.passwordVerify.value
  );
  const passwordVerifyState = useSelector(
    (state) => state.form.passwordVerify.state
  );
  const dispatch = useDispatch();

  const passwordCheckHandler = (event) => {
    // dispatch(passwordReducer({ password: event.target.value }));
    dispatch(
      passwordVerifyReducer({ passwordVerifyValue: event.target.value })
    );
    if (event.target.value === password) {
      dispatch(passwordStateVerifyReducer({ passwordVerifyState: true }));
    } else {
      dispatch(passwordStateVerifyReducer({ passwordVerifyState: false }));
    }
  };
  // useEffect(() => {}, [password]);
  return (
    <>
      <Input
        type="password"
        height={"2rem"}
        value={passwordVerify}
        placeholder={"VERIFY PASSWORD"}
        mg={"1rem 2rem 0 2rem"}
        width={"14rem"}
        bd={"none"}
        br={"5px"}
        bdbt={
          passwordVerifyState
            ? `2px solid ${styles.colors.darkBlue}`
            : `2px solid red`
        }
        onChange={passwordCheckHandler}
      />
    </>
  );
};

export default VerifyPassword;
