import React from "react";
import { Card } from "../../../../UI/Card.styled";
import { Input } from "../../../../UI/Input.styled";
import { setNoteInputReducer } from "../../../../redux/addTodoForm";
import { useDispatch, useSelector } from "react-redux";
import { setNoteInputisValidReducer } from "../../../../redux/addTodoForm";

const NoteInput = () => {
  const styles = useSelector((state) => state.style);
  const dispatch = useDispatch();
  const noteInput = useSelector((state) => state.addTodoForm.noteInput);
  const noteInputIsValid = useSelector(
    (state) => state.addTodoForm.noteInputIsValid
  );
  const onChangeHandler = (event) => {
    dispatch(setNoteInputReducer({ noteInput: event.target.value }));
    if (noteInput.length >= 5) {
      dispatch(setNoteInputisValidReducer({ noteInputIsValid: true }));
    } else {
      dispatch(setNoteInputisValidReducer({ noteInputIsValid: false }));
    }
  };

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
        bd={"none"}
        br={"5px"}
        value={noteInput}
        bdbt={
          noteInputIsValid
            ? `2px solid ${styles.colors.darkBlue}`
            : `2px solid red`
        }
      />
    </Card>
  );
};

export default NoteInput;
