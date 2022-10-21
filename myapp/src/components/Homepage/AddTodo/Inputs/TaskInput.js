import React from "react";
import { Card } from "../../../../UI/Card.styled";
import { Input } from "../../../../UI/Input.styled";
import { useDispatch } from "react-redux";
import {
  setTaskInputisValidReducer,
  setTaskInputReducer,
} from "../../../../redux/addTodoForm";
import { useSelector } from "react-redux";

const TaskInput = () => {
  const styles = useSelector((state) => state.style);
  const taskInputIsValid = useSelector(
    (state) => state.addTodoForm.taskInputIsValid
  );
  const taskInput = useSelector((state) => state.addTodoForm.taskInput);
  const dispatch = useDispatch();
  const onChangeHandler = (event) => {
    dispatch(setTaskInputReducer({ taskInput: event.target.value }));
    if (taskInput.length >= 2) {
      dispatch(setTaskInputisValidReducer({ taskInputIsValid: true }));
    } else {
      dispatch(setTaskInputisValidReducer({ taskInputIsValid: false }));
    }
  };

  console.log(taskInput);
  return (
    <Card>
      <Input
        placeholder="TASK INPUT"
        height={"3rem"}
        width={"100%"}
        mg={"0.5rem 0rem"}
        float={"left"}
        onChange={onChangeHandler}
        bd={"none"}
        br={"5px"}
        font={styles.fonts.mainFont}
        value={taskInput}
        bdbt={
          taskInputIsValid
            ? `2px solid ${styles.colors.darkBlue}`
            : `2px solid red`
        }
      />
    </Card>
  );
};

export default TaskInput;
