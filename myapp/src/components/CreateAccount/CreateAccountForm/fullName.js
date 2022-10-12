import React from "react";
import { Input } from "../../../UI/Input.styled";
import { useDispatch, useSelector } from "react-redux";
import { nameReducer } from "../../../redux/form";
import { fullNameIsValidReducer } from "../../../redux/form";

const FullName = () => {
  const styles = useSelector((state) => state.style);
  const fullName = useSelector((state) => state.form.fullName);
  const fullNameIsValid = useSelector((state) => state.form.fullNameIsValid);

  const dispatch = useDispatch();
  // console.log(fullName);
  const fullNameHandler = (event) => {
    dispatch(nameReducer({ fullName: event.target.value }));
    const timeOut = setTimeout(() => {
      if (fullName.length > 5) {
        dispatch(fullNameIsValidReducer({ fullNameIsValid: true }));
      } else {
        dispatch(fullNameIsValidReducer({ fullNameIsValid: false }));
      }
    }, 2000);
  };

  return (
    <>
      <Input
        height={"2rem"}
        value={fullName}
        mg={"1rem 2rem 0 2rem"}
        width={"14rem"}
        placeholder={"FULLNAME"}
        bd={"none"}
        br={"5px"}
        bdbt={
          fullNameIsValid
            ? `2px solid ${styles.colors.darkBlue}`
            : `2px solid red`
        }
        onChange={fullNameHandler}
      />
    </>
  );
};

export default FullName;
