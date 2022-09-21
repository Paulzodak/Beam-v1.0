import React from "react";
import { Card } from "../../../../UI/Card.styled";
import { Input } from "../../../../UI/Input.styled";
import { setNoteInputReducer } from "../../../../redux/addTodoForm";
import { useDispatch, useSelector } from "react-redux";
const NoteInput = () => {
  const dispatch = useDispatch();
  const onChangeHandler = (event) => {
    dispatch(setNoteInputReducer({ noteInput: event.target.value }));
    console.log("j");
  };
  const noteInput = useSelector((state) => state.addTodoForm);
  console.log(noteInput);
  return (
    <Card>
      <Input
        placeholder="NOTES"
        height={"3rem"}
        width={"100%"}
        mg={"0.5rem 0rem"}
        float={"left"}
        onChange={onChangeHandler}
      />
    </Card>
  );
};

export default NoteInput;
